import config from './../config.json';
import styled from "styled-components";
import {CSSReset} from "../src/components/cssReset";
import {StyledTimeline} from "../src/components/cssTimeline";
import {StyledFavorites} from "../src/components/cssFavorites";
import Menu from "../src/components/menu";
import {useState} from "react";

function Homepage() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <>
            <CSSReset/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Header/>
                <Timeline searchValue={searchValue} playlists={config.playlists}/>
                <FavoritesChannels favorites={config.favorites}/>
            </div>
        </>
    )
}

const StyledBanner = styled.div`
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-position: center center;
  background-size: cover;
  height: 270px;
`

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
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
            <StyledBanner backgroundImage={config.bannerImage}/>
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

function Timeline({searchValue, ...props}) {
    const playlistsNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            Timeline
            <div>
                {
                    playlistsNames.map(playlist => {
                        const videos = props.playlists[playlist];
                        return (
                            <section key={playlist}>
                                <h2>{playlist}</h2>
                                <div>
                                    {
                                        videos.filter(item => {
                                            const videoTitleNormalize = item.title.toLowerCase();
                                            const searchValueNormalize = searchValue.toLowerCase();

                                            return videoTitleNormalize.toLowerCase().includes(searchValueNormalize)
                                        }).map(item => {
                                            return (
                                                <a key={item.id} href={item.url}>
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

function FavoritesChannels(props) {
    const favorites = props.favorites;

    return (
        <StyledFavorites>
            <section>
                <h2>Favorites Channels</h2>
                <div className="users-container">
                    {
                        favorites.map(user => {
                            return (
                                <div key={user.id}>
                                    <img src={`https://github.com/${user.userImage}.png`} alt=""/>
                                    <div>
                                        <p>@{user.username}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </StyledFavorites>
    )
}

export default Homepage
