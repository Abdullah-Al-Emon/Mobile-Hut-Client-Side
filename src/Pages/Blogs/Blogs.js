import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () =>
{
    return (
        <div className='md:my-20 my-12'>
            <h3 className="text-3xl text-center mb-8">This is Blogs Page</h3>
            <Accordion className='md:w-[65vw] w-[90vw] mx-auto'>
                <Accordion.Panel>
                    <Accordion.Title>
                        What are the different ways to manage a state in a React application?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            There are four main types of state you need to properly manage in your React apps:
                            <>1. Local state</>
                            <>2. Global state</>
                            <>3. Server state</>
                            <>4. URL state</>
                        </p>
                        <div className="text-gray-500 dark:text-gray-400">
                            <><strong>Local (UI) state -</strong> Local state is data we manage in one or another component.</>
                            <><strong>Global (UI) state -</strong> Global state is data we manage across multiple components.</>
                            <><strong>Server state -</strong>  Data that comes from an external server that must be integrated with our UI state.</>
                            <><strong>URL state -</strong> Data that exists on our URLs, including the pathname and query parameters.</>
                        </div>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        How does prototypical inheritance work?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The Prototypal Inheritance is a feature in javascript used to add methods and properties
                            in objects. It is a method by which an object can inherit the properties and methods of
                            another object. Traditionally, in order to get and set the [[Prototype]] of an object,
                            we use Object. getPrototypeOf and Object.</p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is a unit test? Why should we write unit tests?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            A unit test is a way of testing a unit - the smallest piece of code that
                            can be logically isolated in a system. In most programming languages, that
                            is a function, a subroutine, a method or property. The isolated part of the
                            definition is important.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            When should you write unit tests?
                            For Test-Driven Development (TDD), you write unit tests before writing any
                            implementation. This makes your implementation details in your code shorter
                            and easier to understand. In this instance, the best time to write unit tests
                            is immediately. For others, most developers write unit tests after the code's
                            been written.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        React vs. Angular vs. Vue?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>React:</strong>
                            React offers a Getting Started guide that should help one set up React in
                            about an hour. The documentation is thorough and complete, with solutions
                            to common issues already present on Stack Overflow. React is not a complete
                            framework and advanced features require the use of third-party libraries.
                            This makes the learning curve of the core framework not so steep but depends
                            on the path you take with additional functionality. However, learning to use
                            React does not necessarily mean that you are using the best practices.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>Angular:</strong>
                            Angular has a steep learning curve, considering it is a complete solution,
                            and mastering Angular requires you to learn associated concepts like TypeScript
                            and MVC. Even though it takes time to learn Angular, the investment pays dividends
                            in terms of understanding how the front end works.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            <strong>Vue:</strong>
                            Vue provides higher customizability and hence is easier to learn than Angular
                            or React. Further, Vue has an overlap with Angular and React with respect to
                            their functionality like the use of components. Hence, the transition to Vue
                            from either of the two is an easy option. However, simplicity and flexibility
                            of Vue is a double-edged sword — it allows poor code, making it difficult to
                            debug and test.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blogs;