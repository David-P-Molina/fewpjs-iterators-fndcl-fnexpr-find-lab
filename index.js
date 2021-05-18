superbowlWin = (array) => {
      let record = array.find(game => game.result === "W")
      if (!!record) {
        return record.year
       } else {
        return undefined
        }
  }