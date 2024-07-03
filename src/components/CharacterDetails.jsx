import React from 'react';
import CharacterDetail from './detailed';  // Reusing the CharacterDetail component from your previous assignment
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();  // Getting the character ID from the URL params

    return (
        <div>
            <CharacterDetail characterId={id} />
        </div>
    );
};

export default CharacterDetails;
