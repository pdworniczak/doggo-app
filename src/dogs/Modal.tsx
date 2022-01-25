import { useEffect, useState } from "react"
import { breedsApi } from "../api"

interface ModalProps {
    breed: null|string;
    close: () => void;
}

export const Modal = ({breed, close}: ModalProps) => {
    const [backgroundImage, setBackgroundImage] = useState('');
    useEffect(() => {
        const fetch = async () => {
            try {

                if (breed) {
                    const [b, subb] = breed.split(' ')
                    const breedRandomImageResponse = await breedsApi.getRandomBreedImage(b, subb)
                    
                    setBackgroundImage(breedRandomImageResponse.message)
            }
            } catch (error) {
                console.error(error)
            } 
        }

            fetch();
    }, [breed])

    return <section style={{height: 300, width: 300, position: "absolute", top: 200, left: 300, background: 'lightblue', display: breed ? 'block' : 'none', backgroundImage: `url(${backgroundImage})`}}>
        <button onClick={close}>x</button>
        <p>{breed}</p>
    </section>
}