import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactLink from '../Info/Contact/ContactLink';
import ProjectCard from '../Info/Project/ProjectCard';

// mock data
class MockData {
    static mockContactLinkData = {
        expClass: 'mock-e-2',
        link: 'https://mock-link.com',
        text: 'mock-link',
        icon: 'fa-mock'
    }

    static mockProjectCardData = {
        title: 'testTitle',
        imageURL: '/sample.jpg',
        imageALT: 'sample image',
        description: 'sample project description',
        tags: [
            'testTag1',
            'testTag2'
        ],
        repoLink: 'https://github.com/TestUser/TestRepo'
    }
}

// tests
test('<ContackLink /> test', () => {
    // get the mock data
    const mockData = MockData.mockContactLinkData;

    // arrange the component
    const {container} = render(<ContactLink {...mockData} />);

    expect(container).toBeTruthy();
    expect(container.childNodes.length).toBe(1);

    const testComponent = container.firstChild;
    expect(testComponent).toBeTruthy();
    expect(testComponent.classList.contains('exp-btn')).toBe(true);
    expect(testComponent.classList.contains(mockData.expClass)).toBe(true);
    expect(testComponent).toHaveAttribute('href', mockData.link);

    const children = testComponent.childNodes;
    expect(children[0]).toBeTruthy();
    expect(children[0].classList.contains('e-link-1')).toBe(true);
    expect(children[0].textContent).toBe(mockData.text);

    expect(children[1]).toBeTruthy();
    expect(children[1].classList.contains('icon-1')).toBe(true);
    expect(children[1].childNodes.length).toBe(1);
    expect(children[1].firstChild.classList.contains('fa')).toBe(true);
    expect(children[1].firstChild.classList.contains(mockData.icon)).toBe(true);
});

test('<ProjectCard /> test', () => {
    // get the mock data
    const mockData = MockData.mockProjectCardData;

    // arrange the component
    const {container} = render(<ProjectCard {...mockData} />);

    expect(container).toBeTruthy();
    expect(container.childNodes.length).toBe(1);

    const testComponent = container.firstChild;
    expect(testComponent).toBeTruthy();
    expect(testComponent).toHaveClass('card');

    const content = testComponent.childNodes;

    expect(content[0]).toBeTruthy();
    expect(content[0]).toHaveTextContent(mockData.title);

    expect(content[1]).toBeTruthy();
    expect(content[1].firstChild).toBeTruthy();
    expect(content[1].firstChild).toHaveClass('project-image');
    expect(content[1].firstChild).toHaveAttribute('src', process.env.PUBLIC_URL + mockData.imageURL);
    expect(content[1].firstChild).toHaveAttribute('alt', mockData.imageALT);

    expect(content[2]).toBeTruthy();
    expect(content[2]).toHaveClass('description');
    expect(content[2]).toHaveTextContent(mockData.description);

    expect(content[3]).toBeTruthy();

    expect(content[4]).toBeTruthy();
    expect(content[4]).toHaveClass('tags');
    expect(content[4].childNodes.length).toBe(mockData.tags.length);

    expect(content[5]).toBeTruthy();
    expect(content[5]).toHaveClass('repo-link');
    expect(content[5]).toHaveAttribute('href', mockData.repoLink);
});