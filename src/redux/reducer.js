const initialState = {
    image:null,
    price:'',
    nameOfStay:'',
    telephoneNumber:'',
    address: '',
    stayType:''
}

const HANDLE_IMAGE = 'HANDLE_IMAGE'

export const handleImage = (image) => {
    return{
        type: HANDLE_IMAGE,
        payload: image
    }
}

const HANDLE_PRICE = 'HANDLE_PRICE'

export const handlePrice = (price) => {
    return{
        type: HANDLE_PRICE,
        payload: price
    }
}

const HANDLE_NAMEOFSTAY = 'HANDLE_NAMEOFSTAY'

export const handleNameOfStay = (nameOfStay) => {
    return{
        type: HANDLE_NAMEOFSTAY,
        payload: nameOfStay
    }
}

const HANDLE_TELEPHONENUMBER = 'HANDLE_TELEPHONENUMBER'

export const handleTelephoneNumber = (telephoneNumber) => {
    return{
        type: HANDLE_TELEPHONENUMBER,
        payload: telephoneNumber
    }
}

const HANLDE_ADDRESS = 'HANDLE_ADDRESS'

export const handleAddress = (address) => {
    return{
        type: HANLDE_ADDRESS,
        payload: address
    }
}

const HANDLE_STAYTYPE = 'HANDLE_STAYTYPE'

export const handleStayType = (stayType) => {
    return{
        type: HANDLE_STAYTYPE,
        payload: stayType
    }
}

export default function reducer (state=initialState,action){
    const {type, payload} = action 


switch(type){
    case HANDLE_IMAGE:
        return{...state, image: payload}
    case HANDLE_PRICE:
        return{...state, price: payload} 
    case HANDLE_ADDRESS:
        return{...state, address: payload}
    case HANDLE_NAMEOFSTAY:
        return{...state, nameOfStay: payload}
    case HANDLE_TELEPHONENUMBER:
        return{...state, telephoneNumber: payload}
    case HANDLE_STAYTYPE:
        return{...state, stayType: payload}
    default: return state
    
}
}
