import config from './../config.json';
import styled from "styled-components";
import {CSSReset} from "../src/components/cssReset";
import Menu from "../src/components/cssMenu";
import {StyledTimeline} from "../src/components/cssTimeline";

function Homepage() {
    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu/>
                <Header/>
                <Timeline playlists={config.playlists}/>
            </div>
        </>
    )
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt=""/>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {

    const playlistsNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            Timeline
            <div>
                {
                    playlistsNames.map(playlist => {
                        const videos = props.playlists[playlist];
                        return (
                            <section>
                                <h2>{playlist}</h2>
                                <div>
                                    {
                                        videos.map(item => {
                                            return (
                                                <a href={item.url}>
                                                    <img src={item.thumb} alt=""/>
                                                    <span>{item.title}</span>
                                                </a>
                                            )
                                        })
                                    }
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </StyledTimeline>
    )
}

export default Homepage
