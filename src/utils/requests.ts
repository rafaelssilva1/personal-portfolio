import axios from "axios";

export const details = async (jwtAuthToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
        query: `query GetDetails {
                details {
                    email
                    location
                    phone
                    name
                    photo
                    role
                    social {
                        title
                        icon
                        link
                        order
                    }
                    summary
                }
          }`
    },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtAuthToken}`
            }
        }
    );

    return response.data;
};

export const education = async (jwtAuthToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
            query: `query GetEducation {
                educations {
                    nodes {
                        id
                        title
                        content
                        school
                        grade
                        startDate
                        endDate
                        order
                    }
                }
            }`
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${jwtAuthToken}`
            }
        }
    );

    return response.data;
};

export const information = async (jwtAuthToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
            query: `query GetInformation {
                informations {
                    nodes {
                        id
                        title
                        content
                    }
                }
            }`
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${jwtAuthToken}`
            }
        }
    );

    return response.data;
};

export const projects = async (jwtAuthToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
          query: `query GetProjects {
                posts {
                    nodes {
                        databaseId
                        title
                        excerpt
                        content
                        featuredImage {
                            node {
                                sourceUrl
                                altText
                            }
                        }
                        technologies {
                            title
                            icon
                            order
                        }
                        projectLink
                        order
                    }
                }
          }`
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${jwtAuthToken}`
            }
        }
    );

    return response.data;
};

export const works = async (jwtAuthToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
          query: `query GetWorks {
                works {
                    nodes {
                        id
                        title
                        content
                        company
                        startDate
                        endDate
                        order
                    }
                }
          }`
        },
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : `Bearer ${jwtAuthToken}`
            }
        }
    );

    return response.data;
};