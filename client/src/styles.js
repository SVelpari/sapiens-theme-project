// export default makeStyles(() => ({
//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//   },
//   primary: {
//     color: 'blue',
//   },
//   image: {
//     marginLeft: '15px',
//   },
// }));

function createThemes(theme) {
  console.log(theme);
  if(theme === 'Blue') {
    return {
      text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      },
      box: {
        width: '40%',
        marginTop: '20%',
        padding: 20,
        height: 100,
        border: '3px solid blue',
        background: 'blue',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: '27%',
        justifyContent: 'center'
      }
    }
  }
  if(theme === 'Green') {
    return {
      text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      },
      box: {
        width: '40%',
        marginTop: '20%',
        padding: 20,
        height: 100,
        border: '3px solid green',
        background: 'green',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: '27%',
        justifyContent: 'center'
      }
    }
  }
  if(theme === 'Orange') {
    return {
      text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
      },
      box: {
        width: '40%',
        marginTop: '20%',
        padding: 20,
        height: 100,
        border: '3px solid orange',
        background: 'orange',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: '27%',
        justifyContent: 'center'
      }
    }
  }
  if(theme === 'Dark') {
    return {
      text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
      },
      box: {
        width: '40%',
        marginTop: '20%',
        padding: 20,
        height: 100,
        border: '3px solid black',
        background: 'white',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: '27%',
        justifyContent: 'center'
      }
    }
  }
}

export default createThemes;