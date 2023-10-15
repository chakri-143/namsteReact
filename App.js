const parent=React.createElement(
    'div',
{'id':'parent'},[
    React.createElement('div',{'id':'child'},[
            React.createElement('h1',{},'i am h1 tag'),
            React.createElement('h1',{},'i am h2 tag')
      ]),
   React.createElement('div',{'id':'child'},[
        React.createElement('h1',{},'i am hsrkdufrehi tag'),
        React.createElement('h1',{},'i am hsjfhssdj tag')
     ])
]

)

console.log(parent)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)