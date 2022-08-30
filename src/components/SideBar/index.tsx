import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
    return(
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title='Talvez você curta'
                        elements={[
                            <FollowSugestion 
                                name='Orihime Inoue'
                                nickname='@inoue.orihime'
                            />,
                            <FollowSugestion 
                                name='Chad'
                                nickname='@sado.yasutora'
                            />,
                            <FollowSugestion 
                                name='Último Quincy'
                                nickname='@ishida.uryu'
                            />
                        ]}
                    />
                    <List 
                        title='Talvez você curta'
                        elements={[
                            <News />,
                            <News />,
                            <News />
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
}

export default SideBar;