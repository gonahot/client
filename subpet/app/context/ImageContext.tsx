import { createContext, useContext, useState } from "react";

interface Data {
	url:string
}

interface ContextType {
	image: Data ;
	setImage: (image: Data) => void;
}

const ImageContext = createContext<ContextType>({
    image:{url:''},
    setImage:()=>{}
});

export function Provider({ children }: { children: React.ReactNode }){
    const [image, setImage] = useState<Data>({
		url:'',
	});
		return (
			<ImageContext.Provider value={{ image, setImage }}>
				{children}
			</ImageContext.Provider>
		);
    
};

export const useImage = ()=>{
    const context = useContext(ImageContext);
    return context;
}