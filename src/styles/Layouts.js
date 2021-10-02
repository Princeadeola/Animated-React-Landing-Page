import styled from "styled-components";

export const OuterLayout = styled.section`
    padding: 5rem 15rem;

    // Laptops
    @media screen 
        and (min-device-width: 1200px) 
        and (max-device-width: 1600px) { 
            padding: 5rem 14rem;
    }

    // Tablets
    @media 
        (min-device-width: 890px) 
        and (max-device-width: 1200px) {
            padding: 3rem 5rem;
    }
    // Phones 1
    @media only screen 
        and (min-device-width: 480px) 
        and (max-device-width: 890px){
            padding: 5rem 5rem;
    }

    // Phones 2
    @media only screen and (max-device-width: 480px){
        padding: 2rem 2rem;
    }
`;

export const InnerLayout = styled.section`
    padding: 8rem 0;

    @media screen and (max-width: 1347px){
        padding: 6rem 0;
    }
`;