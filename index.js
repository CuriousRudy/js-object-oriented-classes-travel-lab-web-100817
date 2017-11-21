class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }
  yearsExperienceFromBeginningOf (arg) {
    let start = this.startDate.getFullYear()
    return (arg - 1) - start
  }
}

let horizontals =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor (startObj, endObj) {
    this.startHorizontal = startObj['horizontal']
    this.startVertical = startObj['vertical']
    this.endHorizontal = endObj['horizontal']
    this.endVertical = endObj['vertical']
  }
  blocksTravelled () {
    let eastWest = Math.abs(horizontals.indexOf(this.startHorizontal) - horizontals.indexOf(this.endHorizontal))
    let northSouth = Math.abs(this.startVertical - this.endVertical)
    return eastWest + northSouth
  }
  estimatedTime (trip) {
    let blocks = this.blocksTravelled()
    if (trip) {
      return blocks / 2
    } else {
      return blocks / 3
    }
  }
}
