import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardHeader, CardActionArea } from "@material-ui/core";

const API = "https://api.github.com/repos";

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      repo: this.props.repo,
      name: "",
      avatar: "",
      forks: "",
      watchers: "",
      stars: "",
      homeUrl: "",
      description: "",
      notFound: "",
    };
  }

  fetchProject(username, repo) {
    let url = `${API}/${username}/${repo}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          username: data.owner.login,
          name: data.name,
          avatar: data.owner.avatar_url,
          forks: data.forks,
          watchers: data.watchers,
          stars: data.stargazers_count,
          homeUrl: data.html_url,
          description: data.description,
          notFound: data.message,
        });
      })
      .catch((error) =>
        console.log(`Oops! There was a problem looking up ${username}`)
      );
  }

  componentDidMount() {
    this.fetchProject(this.state.username, this.state.repo);
  }

  render() {
    return <Project data={this.state} />;
  }
}

class Project extends React.Component {
  render() {
    let data = this.props.data;

    return (
      <Card className="github-project__card">
        <CardActionArea
          href={data.homeUrl}
          target="_blank"
          className="github-project__fill"
        >
          <CardHeader
            disableTypography="true"
            title={
              <Typography component="h2">
                <a className="github-project__link">{data.name}</a>
              </Typography>
            }
            subheader={
              <div className="github-project__info">
                <Typography className="github-project__data">
                  Watchers: {data.watchers}
                </Typography>
                <Typography className="github-project__data">
                  Stars: {data.stars}
                </Typography>
                <Typography className="github-project__data">
                  Forks: {data.forks}
                </Typography>
              </div>
            }
          />
          <CardContent>
            <Typography>{data.description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default ProjectCard;
