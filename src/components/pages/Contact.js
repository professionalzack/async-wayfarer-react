import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Employees from './Employees';

const Contact = () => (
  <>
    <section>
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique amet iste minima iusto vitae velit at vero a eum molestias, voluptatum adipisci maxime illum, veritatis ipsa modi necessitatibus? Fuga iste voluptatem eaque itaque magnam asperiores aliquid, rem saepe repellat, voluptas excepturi delectus perferendis incidunt. Esse dolor corporis unde similique?</p>
      <Link to='/contact/employees'>View Our Team</Link>
    </section>
    <section>
      <Route exact path='/contact/employees' component={Employees} />
    </section>
  </>
);

export default Contact;
