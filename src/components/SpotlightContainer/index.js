import React from 'react';

import { SurfaceContainer, Image } from './styles';

const SpotlightContainer = ({ uri }) => (
    <SurfaceContainer>
        <Image source={{ uri: uri }} />
    </SurfaceContainer>
);

export default SpotlightContainer;