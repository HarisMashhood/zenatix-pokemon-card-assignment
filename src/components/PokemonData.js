import React, { useEffect, useState } from "react";
import Loading from "./Loading"
import Cards from "./Cards";

const PokemonData = () => {
    const [Lists, setLists] = useState([]);
    const [loading, setLoading] = useState(true);
    const getLists = async () => {
        try {
            setLoading(false);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
            setLists(await response.json());
            console.log(response.data.results);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getLists();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <Cards list={Lists} />
        </>
    );


};

export default PokemonData;
