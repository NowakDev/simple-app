import React from 'react'
import MuiTextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textField: {
    width: '50%'
  },
  button: {
    background: 'orange'
  },
  div: {
    margin: '50px',
    textAlign: 'center'
  }
}

class TextField extends React.Component {
  state = {
    name: '',
    questions: []
  }

  onChangeHandler = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = () => {
    const url = 'http://ias.test.arteneo.pl/api/public/question/register/' + this.state.name
    fetch(url)
      .then(() => alert('Dodano'))
  }

  onNameSend = () => {
    const url = 'http://ias.test.arteneo.pl/api/public/points/list/' + this.state.name
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          questions: data
        })
      })
  }


  render() {
    console.log(this.state.questions)
    return (
      <div >
        <div style={styles.container}>
          <MuiTextField style={styles.textField} value={this.state.value} variant={'outlined'} label={'Imię'} onChange={this.onChangeHandler} />
          <Button style={styles.button} onClick={this.onSubmit}>Zgłoś</Button>
        </div>
        <hr />
        <div style={styles.div}>
          <Button style={styles.button} onClick={this.onNameSend}>Ładuj</Button>
          {this.state.questions.map((question, index) => (
            <div key={`question-${index}`}>
              {question.question} : {question.points}
            </div>
          ))}
        </div>
      </div >
    )
  }
}

export default TextField
