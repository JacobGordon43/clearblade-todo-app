import { create } from 'zustand';
export interface Card {
    id : string,
    title : string, 
    description : string,
    status : string,
}

interface CardArr{
    cards : Array<Card>,
    setCards : (cards : Array<Card>) => void

}

export const useCardStore = create<CardArr>()((set)=>({
    cards : [
        {id: "tester", 
        status: "1", 
        title:"Create More Cards", 
        description: "Wecome to ClearBlade ToDo, where you can create more cards for to keep track of what you have to do!"
    }
],
    setCards : (cards) => set((state)=>({
        cards: cards
    }))
}))