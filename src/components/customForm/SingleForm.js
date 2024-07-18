import React from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_FORM = gql`
    query GetForm($id: Int!) {
        GetForm(id: $id) {
            id
            name
            email
            message
        }
    }
`;

function SingleForm() {
    const { id } = useParams();

    // Fetch form data using the ID
    const { loading, error, data } = useQuery(GET_FORM, {
        variables: { id: parseInt(id) },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        data && (
            <div>
                <h1>Form Details</h1>
                <p><strong>ID:</strong> {data.GetForm.id}</p>
                <p><strong>Name:</strong> {data.GetForm.name}</p>
                <p><strong>Email:</strong> {data.GetForm.email}</p>
                <p><strong>Message:</strong> {data.GetForm.message}</p>
            </div>
        )
    );
}

export default SingleForm;
