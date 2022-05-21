import React from "react";
import styled from "styled-components";
const Centerdiv = styled.div`
  align-items: center;
  border: 1px;
  padding-left: 20%;
  padding-right: 20%;
`;

const info = () => {
  return (
    <Centerdiv>
      <h1>INFO</h1>
      <div>
        This project is built on Django on the backend and react js on the
        frontend It has complete token JWT auth with refresh tokens and the
        coordinate data is hosted on a microservice of backend Django
        application and a thus follows micro service architecture I was unable
        to use Redis but given time I can learn it (I do small projects and they
        mostly don’t require database caching I know the concept theoretically )
        this app can be containerized in docker taking about google maps React
        google maps is a package which I am very familiar with and have used
        various times but google for some reason is asking me for my credit card
        to enable the service the component for this case that you require is
        the maker component and I is extremely easy to implement given the api
        key maybe you can give me your api key and I will make this happen I am
        moving to Canada next month and need this job Currently I am setting up
        machine learning pipeline with django at
          <a href="https://www.linkedin.com/company/mastersofterpsolutions/">
            Mastersoft
        </a>

        to do analysis on student data and give teacher incite in student
        performance I am also working on the frontend and making the UI
        responsive My job in short currently is full stack dev and Product
        development and for reference contact:
        <a href="https://www.linkedin.com/in/drprashantborkar/">
          Dr Prashant Borkar
        </a>
      </div>
    </Centerdiv>
  );
};

export default info;
