var katzDeliLine = []

function takeANumber(line,person) {
    
    line.push(person)
    
    return (`${person}, you are ${line.length} in the line`) 
}

function nowServing(line) {
	if (line.length>0) {
	    return line.shift()
    }
	else {
		return ("There is nobody waiting to be served!") }
}

function 