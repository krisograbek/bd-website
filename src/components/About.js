import React from 'react';

function About(props) {
  const { language } = props;
  return (
    <main>
      <h1>{language === 'en' ? 'About Us' : 'Über uns'}</h1>
      <strong>{language === 'en' ? 'We are Büro Digitale!' : 'Wir sind Büro Digitale!'}</strong>
      <p>Lorem ipsum We are amet, consectetur adipiscing elit. Phasellus non mi non dolor condimentum congue vel sit amet mauris. Ut cursus mauris a lacinia tempus.</p>
      <p>Fusce eget aliquam velit. Maecenas vel sollicitudin tortor. Donec viverra lobortis dui vel iaculis.</p>
      <p>Donec vel nibh dolor. Integer vulputate risus vel risus pellentesque, at posuere augue malesuada. Donec id placerat velit.</p>
      <p>Sed vitae ultricies nisl. Nunc dictum sapien vitae augue posuere, nec aliquam justo vulputate. Etiam pharetra, elit vel tempus posuere, purus sapien bibendum ex, sed vulputate tortor lacus a velit.</p>
      <p>Donec ac ex condimentum, ullamcorper urna a, bibendum arcu. Proin sodales massa ac aliquam semper. Nullam aliquam sapien tellus, vitae auctor tellus accumsan in.</p>
    </main>
  );
}

export default About;
