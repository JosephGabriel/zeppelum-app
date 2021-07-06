import styled from 'styled-components/native'
import { SafeAreaView } from "react-native-safe-area-context"

const center = () => {
    return `
        justify-content: center;
        align-items: center
    `
}

const getCenter = (props) => {
    if (props.center) {
        return center
    }

    return null
}

export const ContainerHolder = styled(SafeAreaView)`
    flex:1;
    padding: ${({ padding }) => padding ? `${padding}px` : "0px"};
    padding-bottom:${({ paddingBottom }) => paddingBottom ? `${paddingBottom}px` : "0px"};
    padding-top: ${({ paddingTop }) => paddingTop ? `${paddingTop}px` : "0px"};
    background: ${({ background }) => background ? background : "#fff"};
    ${getCenter}
`