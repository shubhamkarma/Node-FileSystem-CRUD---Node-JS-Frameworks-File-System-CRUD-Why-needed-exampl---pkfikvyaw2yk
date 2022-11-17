const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent)
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const filedata = (data)=>{
		return data;
	}
	let content = fs.readFile(fileName,(err, data) => {
		if (err) throw err;
		filedata(data);
	  })
	return filedata;
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }