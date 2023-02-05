import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactLink from '../Info/Contact/ContactLink';
import ProjectCard from '../Info/Project/ProjectCard';
import ExperienceCard from '../Info/Experience/ExperienceCard';
import Card from '../Info/Card';

// mock data
class MockData {
    static mockContactLinkData = {
        expClass: 'mock-e-2',
        link: 'https://mock-link.com',
        text: 'mock-link',
        icon: 'fa-mock'
    }

    static mockCardData = {
        title: 'sampleCardTitle',
        content: '<div>samplecontent</div>'
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

    static mockExperienceCardData = {
        company: 'sampleCorporation',
        position: 'tester',
        imageURL: '/corporation-logo.png',
        imageALT: 'corporation logo',
        technology: [
            'tech1',
            'tech2'
        ],
        description: [
            'information1',
            'information2',
            'information3'
        ]
    }
}

// cleanup after each test
afterEach(cleanup);

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
test('<Card /> test', () => {
    // get the mock data
    const mockData = MockData.mockCardData;

    // arrange the component
    const {container} = render(<Card {...mockData} />);

    expect(container).toBeTruthy();

    const title = container.querySelector('h4');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(mockData.title);

    const content = container.querySelector('.card-2 div');
    expect(content).toBeTruthy();
    expect(content).toHaveTextContent(mockData.content);
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

test('<ExperienceCard /> test', () => {
    // get the mock data
    const mockData = MockData.mockExperienceCardData;

    // arrange the component
    const {container} = render(<ExperienceCard {...mockData} />);

    expect(container).toBeTruthy();
    const title = container.querySelector('h4');
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent(mockData.company);

    const image = container.querySelector('.company-img');
    expect(image).toBeTruthy();
    expect(image).toHaveAttribute('src', process.env.PUBLIC_URL + mockData.imageURL);
    expect(image).toHaveAttribute('alt', process.env.PUBLIC_URL + mockData.imageALT);

    const details = container.querySelector('.exp-details');
    expect(details).toBeTruthy();
    expect(details).toHaveTextContent('Position ' + mockData.position);

    const technologies = details.querySelector('.tags');
    expect(technologies).toBeTruthy();
    expect(technologies.childNodes.length).toBe(mockData.technology.length);
    for (let i = 0; i < technologies.childNodes.length; i++)
        expect(technologies.childNodes[i]).toHaveTextContent(mockData.technology[i]);
    
    const description = details.querySelector('.exp-description');
    expect(description).toBeTruthy();

    const descriptionTitle = description.querySelector('i');
    expect(descriptionTitle).toBeTruthy();
    expect(descriptionTitle).toHaveTextContent('Description');

    const descriptionContent = description.querySelector('ul');
    expect(descriptionContent).toBeTruthy();
    expect(descriptionContent.childNodes.length).toBe(mockData.description.length);
    for (let i = 0; i < descriptionContent.childNodes.length; i++)
        expect(descriptionContent.childNodes[i]).toHaveTextContent(mockData.description[i]);
});