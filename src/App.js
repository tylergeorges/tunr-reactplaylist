import './App.css';
import React, {Component} from 'react'
import playlist from './data'
console.table(playlist)


class App extends Component{

  state = {
    playlist: playlist,
    title: "", 
    artist: "",
    time: ''
  }

  //* link to inputs
   handleChange = (e) =>{ 
    e.preventDefault()

    this.setState({ [e.target.id]: e.target.value})
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    const newSong = {
     title: this.state.title,
     artist: this.state.artist,
     time: this.state.time,
    }

    this.setState({
      song: [],
      playlist: {
        songs: [...this.state.playlist.songs, newSong],
        title: this.state.playlist.title,
        created: this.state.playlist.created
      }
    })
  }

  render(){
  return (
    <div className="tunr-container">
      <header>
      <h1>Tunr</h1>
      <h2>For all your playlist needs</h2>
      </header>


      <div className="playlist">
        <h1>{this.state.playlist.title}</h1>

        <div className="songs">
          {
            this.state.playlist.songs.map(song =>(

               //* the time is unique to each song
              <div className= "song" key={song.time}>
                <h1>{song.title}</h1>
                <h2>{song.artist}</h2>
                <h3>{song.time}</h3>
              </div>
            ))
          }
     
        </div>
      </div> 

      <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text"  id="title"  value={this.state.title} onChange ={this.handleChange}/>
          
          <label htmlFor='artist'>Artist</label>
          <input type="text" id='artist' value={this.state.artist} onChange ={this.handleChange}/>

          <label htmlFor='time'>Time</label>
          <input type="text" id="time"   value={this.state.time}   onChange ={this.handleChange}/>

          <input type ="submit" value="Add Song" />
      </form>

    </div>
  );
  }
}

export default App;
