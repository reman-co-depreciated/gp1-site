console.log('welcome to the Reman interim site!')

function copyToClip(msg) {
    console.log('copy clip function called');

    navigator.clipboard.writeText(msg).then(() => {
      alert(`${msg} successfully copied to clipboard`);
    }, () => {
      alert(`${msg} failed to copy to clipboard`)
    });
}