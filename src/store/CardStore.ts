import { create } from 'zustand';
export interface Card {
    id : string,
    title : string, 
    description : string,
    status : string,
}

interface CardArr{
    cards : Array<Card>,
    addCard : (data : Card) => void,
    setCards : (cards : Array<Card>) => void

}

export const useCardStore = create<CardArr>()((set)=>({
    cards : [{id: "dafdsfasf", status: "1", title:"title", description: "dfasdfaf"}],
    addCard: (data : Card) => set((state)=>({
        cards: [...state.cards, data]
    })),
    setCards : (cards) => set((state)=>({
        cards: cards
    }))
}))