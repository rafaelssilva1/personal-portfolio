import axios from "axios";
import { useEffect, useMemo } from "react";
import { useMutation } from "react-query";

const login = async () => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
            query: `mutation LoginUser {
                login(
                        input: {
                            clientMutationId: "uniqueId",
                            username: "${process.env.REACT_APP_USER}",
                            password: "${process.env.REACT_APP_PASSWORD}",
                        }) {
                        user {
                            jwtAuthToken
                            jwtRefreshToken
                        }
                }
            }`
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data;
};

const refreshToken = async (jwtRefreshToken: string) => {
    const response = await axios.post(
        `${process.env.REACT_APP_REQUEST_URL}`, {
            query: `mutation RefreshAuthToken {
                refreshJwtAuthToken(
                    input: {
                    clientMutationId: "uniqueId"
                    jwtRefreshToken: "${jwtRefreshToken}",
                }) {
                    authToken
                }
            }`
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response.data;
};

const useLogin = () => {
    const {
        data,
        error,
        mutate,
    } = useMutation(login);

    const {
        data: refresh,
        mutate: refreshJwtToken,
    } = useMutation(refreshToken);

    useEffect(() => {
        mutate();
    }, []);

    const tokens = useMemo(() => {
        return {
            jwtAuthToken: refresh?.refreshJwtAuthToken?.authToken ?? data?.data?.login?.user.jwtAuthToken,
            jwtRefreshToken: data?.data?.login?.user.jwtAuthToken
        }
    }, [data, refresh])

    return {
        data: tokens,
        error,
        refreshJwtToken
    }
};

export default useLogin;