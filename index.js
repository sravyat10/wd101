let userform = document.getElementById("user-form");
const retriveEntries=()=>
{
    let entries = localStorage.getItem("user-entries");
    if(entries)
    {
        entries=JSON.parse(entries);
    }
    else{
        entries=[];
    }
    return entries;
}
let userentries=retriveEntries();
const displayEntries=()=>
{
    const entries=retriveEntries();
    let tableEntries='';
    entries.forEach((entry)=>
    {
        const nameCell=`<td >${entry.name}</td>`;
        const emailCell=`<td >${entry.email}</td> `;
        const passwordCell=`<td >${entry.password}</td>` ;
        const dobCell=`<td >${entry.dob}</td>` ;
        const termsCell=`<td >${entry.terms}</td>` ;

        const row =`<tr>${nameCell}${emailCell}${passwordCell}${dobCell}${termsCell}</tr>`;
        tableEntries += row;
    })
    const table = `<table><tr>
        <th class="px-4 py-2">Name</th>
        <th class="px-4 py-2">Email</th>
        <th class="px-4 py-2">Password</th>
        <th class="px-4 py-2" >Date of Birth</th>
        <th class="px-4 py-2">Accepted terms?</th>
        </tr>${tableEntries}</table>`;
        console.log(table);
        let details =document.getElementById("user-entries");
        details.innerHTML=table;
    }
const saveUserForm=(event)=>{
   event.preventDefault();
   const name =document.getElementById("name").value;
   const email =document.getElementById("email").value;
   const password=document.getElementById("password").value;
   const dob =document.getElementById("dob").value;
   const terms=document.getElementById("terms").checked;
   const entry ={
    name,
    email,
    password,
    dob,
    terms
   };
   userentries.push(entry);
   localStorage.setItem("user-entries",JSON.stringify(userentries));
   displayEntries();
}
userform.addEventListener("submit",saveUserForm);
displayEntries();
