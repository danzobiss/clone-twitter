import React from 'react';

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
    return(
        <Container>
            <Retweeted>
                <RocketseatIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />

                <Content>
                    <Header>
                        <strong>Ichigo Kurosaki</strong>
                        <span>@kurosaki.ichigo</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>

                    <Description>Xing xong ling long</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;