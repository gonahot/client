import { createContext, useContext, useState } from "react";

interface PetData {
	name: string;
	birthdate: string;
	grade_level: string;
}

interface PetDataContextType {
	petData: PetData ;
	setPetData: (data: PetData) => void;
}

const UserDataContext = createContext<PetDataContextType>({
  petData: {
    name: '',
    birthdate: '',
    grade_level: ''
  },
  setPetData: () => { }
});
export function PetDataProvider({ children }: { children: React.ReactNode }) {
	const [petData, setPetData] = useState<PetData>({
		name: '',
		birthdate: '',
		grade_level: ''
	});
		return (
			<UserDataContext.Provider value={{ petData, setPetData }}>
				{children}
			</UserDataContext.Provider>
		);
}

export const usePetData = () => {
	const context = useContext(UserDataContext);
	return context;
};
