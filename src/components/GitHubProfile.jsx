import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";

const API = "https://api.github.com/users";

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      name: "",
      avatar: "",
      location: "",
      repos: "",
      followers: "",
      following: "",
      homeUrl: "",
      notFound: "",
    };
  }

  fetchProfile(username) {
    let url = `${API}/${username}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.login,
          name: data.name,
          avatar: data.avatar_url,
          location: data.location,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          homeUrl: data.html_url,
          notFound: data.message,
        });
      })
      .catch((error) =>
        console.log(`Oops! There was a problem looking up ${username}`)
      );
  }

  componentDidMount() {
    this.fetchProfile(this.state.username);
  }

  render() {
    return <Profile data={this.state} />;
  }
}

class Profile extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <Card className="github-profile__card">
        <CardActionArea
          href={data.homeUrl}
          target="_blank"
          className="github-profile__fill"
        >
          <CardContent>
            <CardMedia className="github-profile__image" image={data.avatar} />
            <Typography component="h2">
              <a className="github-profile__link">
                {data.name || data.username}
              </a>
            </Typography>
            <Typography component="h3">{data.location}</Typography>
            <div className="github-profile__info">
              <Typography className="github-profile__data">
                Followers: {data.followers}
              </Typography>
              <Typography className="github-profile__data">
                Following: {data.following}
              </Typography>
            </div>
            <Typography>Repos: {data.repos}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default ProfileCard;
