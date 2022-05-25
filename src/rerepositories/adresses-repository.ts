const adresses = [{id: 1, value: 'Nezalezhnasti 12'}, {id: 2, value: 'Selickaga 11'}]

export const adressesRepository = {
    getAdresses() {
        return adresses
    },
    findAdressById(id: number) {
        let adress = adresses.find(p => p.id === id)
        return adress
    },
}