import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
    return(
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Henrique Danzo</h1>
                <h2>@danzobiss</h2>

                <p>
                    Pipipi popopo
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido em 27 de maio de 2003
                    </li>
                </ul>

                <Followage>
                    <span>seguindo <strong>666</strong></span>
                    <span><strong>420</strong> seguidores</span>
                </Followage>
            </ProfileData>
        </Container>
    )
}

export default ProfilePage;