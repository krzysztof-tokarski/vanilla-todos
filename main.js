(()=>{"use strict";class t{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.finished=!1}}class e{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.todos=[]}}function n(t){const n=document.getElementsByClassName("form-input"),o=n[0].value,i=n[1].value,c=n[2].value,l=n[3].value,d=new e(o,i,c,l);null!=t&&(d.todos=t.todos),localStorage.setItem(o,JSON.stringify(d)),document.querySelector(".fluid-container").innerHTML="",window.location.reload()}function o(t){localStorage.removeItem(t),window.location.reload()}function i(e,c,l){const d=document.querySelector(".form");d&&d.remove();const a=document.querySelector(".fluid-container");null!=a&&(a.innerHTML=""),document.createElement("div").classList.add("new-form-container");const s=document.createElement("form");s.classList.add("form");const r=document.createElement("h3");r.textContent=e,r.classList.add("form-header"),s.appendChild(r),[{input:document.createElement("input"),label:"NAME"},{input:document.createElement("textarea"),label:"DESCRIPTION"},{input:document.createElement("input"),label:"DUE DATE"},{input:document.createElement("input"),label:"PRIORITY"}].forEach((t=>{t.input.classList.add("form-input");const e=document.createElement("label");e.textContent=t.label,s.appendChild(e),s.appendChild(t.input)}));const u=document.createElement("div");u.classList.add("form-buttons-container");const m=document.createElement("button");if(m.classList.add("form-button"),m.textContent="Confirm",m.setAttribute("type","button"),a.appendChild(s),"NEW PROJECT FORM"==e)m.addEventListener("click",(()=>n())),u.appendChild(m);else if("ADD NEW TODO"==e)r.textContent=r.textContent+` TO ${c.title.toUpperCase()}`,m.addEventListener("click",(()=>function(e){localStorage.removeItem(e.title);const n=document.getElementsByClassName("form-input"),o=n[0].value,i=n[1].value,c=n[2].value,l=n[3].value,d=new t(o,i,c,l);e.todos.push(d),localStorage.setItem(e.title,JSON.stringify(e)),document.querySelector(".fluid-container").innerHTML="",window.location.reload()}(c))),u.appendChild(m);else{const d=e.split(" ");if("EDITING"==d[0]){const e=document.getElementsByClassName("form-input"),a=e[0],s=e[1],r=e[2],p=e[3];a.value=c.title,s.value=c.description,r.value=c.dueDate,p.value=c.priority;const f=document.createElement("button");f.classList.add("form-button"),f.setAttribute("type","button");const E=document.createElement("button");E.classList.add("form-button"),E.setAttribute("type","button"),u.appendChild(m),u.appendChild(f),u.appendChild(E),"PROJECT"==d[1]?(m.addEventListener("click",(()=>function(t){localStorage.removeItem(t.title),n(t)}(c))),f.textContent="Delete project",f.addEventListener("click",(()=>o(c.title))),E.textContent="Manage Project's ToDos",E.addEventListener("click",(()=>function(t){const e=document.querySelector(".form");e&&e.remove();const n=document.querySelector(".fluid-container");null!=n&&(n.innerHTML=""),document.createElement("div").classList.add("manage-todos-form-form-container");const o=document.createElement("form");o.classList.add("form");const c=document.createElement("h3");if(c.classList.add("form-header"),c.textContent=`MANAGE TODOS FOR ${t.title.toUpperCase()}`,o.appendChild(c),null==t.todos||0===t.todos.length){const t=document.createElement("p");t.textContent="This project currently has no ToDos.",t.classList.add("no-todos"),o.appendChild(t)}else{const e=document.createElement("div");e.classList.add("todos-container"),t.todos.forEach((n=>{const o=document.createElement("button");o.textContent=n.title,n.finished&&(o.style.backgroundColor="green"),o.setAttribute("type","button"),o.addEventListener("click",(()=>function(t,e){i(`EDITING TODO ${t.title.toUpperCase()} FOR PROJECT ${e.title.toUpperCase()}`,t,e)}(n,t))),e.appendChild(o)})),o.appendChild(e)}const l=document.createElement("button");l.classList.add("form-button"),l.textContent="Add ToDo",l.addEventListener("click",(()=>i("ADD NEW TODO",t))),l.setAttribute("type","button"),o.appendChild(l),n.appendChild(o)}(c)))):"TODO"==d[1]&&(m.addEventListener("click",(()=>function(e,n){const i=n.todos.indexOf(e),c=document.getElementsByClassName("form-input"),l=c[0].value,d=c[1].value,a=c[2].value,s=c[3].value,r=new t(l,d,a,s);n.todos[i]=r,o(n.title),localStorage.setItem(n.title,JSON.stringify(n)),window.location.reload()}(c,l))),f.textContent="Delete ToDo",f.addEventListener("click",(()=>function(t,e){const n=e.todos.filter((e=>e!=t));e.todos=n,o(e.title),localStorage.setItem(e.title,JSON.stringify(e)),window.location.reload()}(c,l))),E.textContent="Change status",E.addEventListener("click",(()=>function(t,e){const n=e.todos.indexOf(t);t.finished=!t.finished,e.todos[n]=t,o(e.title),localStorage.setItem(e.title,JSON.stringify(e)),window.location.reload()}(c,l))))}}s.appendChild(u)}const c=document.querySelector("main");!function(){const t=function(){let t=[],e=Object.keys(localStorage);return e.length,e.forEach((e=>{t.push(localStorage.getItem(e))})),t}();0==t.length?function(){const t=document.createElement("p");t.textContent="You currently have no projects. Try adding a new one right now!",c.appendChild(t)}():function(t){!function(t){const e=document.createElement("div");e.classList.add("projects-list-container"),c.appendChild(e),function(){const t=document.createElement("h2");t.textContent="YOUR PROJECTS",t.classList.add("projects-list-header"),document.querySelector(".projects-list-container").appendChild(t)}();const n=document.createElement("ul");n.classList.add("projects-list"),t.forEach((t=>{const e=JSON.parse(t),o=document.createElement("button");o.textContent=e.title,o.classList.add("projects-list-item"),o.addEventListener("click",(()=>function(t){i(`EDITING PROJECT ${t.title.toUpperCase()} `,t)}(e))),n.appendChild(o)})),e.appendChild(n)}(t)}(t),function(){const t=document.createElement("div");t.classList.add("buttons-container");const e=document.createElement("button");e.textContent="ADD PROJECT",e.classList.add("main-button"),e.addEventListener("click",(()=>i("NEW PROJECT FORM"))),t.appendChild(e),c.appendChild(t)}(),function(){const t=document.createElement("div");t.classList.add("fluid-container"),c.appendChild(t)}()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsTUFBTUMsRUFBS3JGLFNBQVMyQixjQUFjLE1BQ2xDMEQsRUFBR3pELFVBQVVDLElBQUksaUJBQ2pCNkMsRUFBb0J0QyxTQUFRdEMsSUFDeEIsTUFBTXdGLEVBQXFCM0UsS0FBSzRFLE1BQU16RixHQUNoQzBGLEVBQWtCeEYsU0FBUzJCLGNBQWMsVUFDL0M2RCxFQUFnQnhELFlBQWNzRCxFQUFtQmpHLE1BQ2pEbUcsRUFBZ0I1RCxVQUFVQyxJQUFJLHNCQUM5QjJELEVBQWdCaEQsaUJBQWlCLFNBQVMsSUN0RDNDLFNBQW9DMUMsR0FHekN1QixFQURtQixtQkFBb0J2QixFQUFhLE1BQUUyQyxpQkFDNUIzQyxHRG1ENEIyRixDQUEyQkgsS0FDM0VELEVBQUdwRCxZQUFZdUQsTUFHbkJOLEVBQWNqRCxZQUFZb0QsR0EzQjFCSyxDQUFtQmhCLEdBdEJmaUIsQ0FBa0JqQixHQTJEbkIsV0FDSCxNQUFNckMsRUFBbUJyQyxTQUFTMkIsY0FBYyxPQUNoRFUsRUFBaUJULFVBQVVDLElBQUkscUJBQy9CLE1BQU0rRCxFQUFtQjVGLFNBQVMyQixjQUFjLFVBQ2hEaUUsRUFBaUI1RCxZQUFjLGNBQy9CNEQsRUFBaUJoRSxVQUFVQyxJQUFJLGVBQy9CK0QsRUFBaUJwRCxpQkFBaUIsU0FBUSxJQUFNbkIsRUFBYyxzQkFDOURnQixFQUFpQkosWUFBWTJELEdBQzdCbkIsRUFBS3hDLFlBQVlJLEdBWGpCd0QsR0FhRyxXQUNILE1BQU1uRSxFQUFpQjFCLFNBQVMyQixjQUFjLE9BQzlDRCxFQUFlRSxVQUFVQyxJQUFJLG1CQUM3QjRDLEVBQUt4QyxZQUFZUCxHQWZqQm9FLEdFbEVKQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvbW9kZWxzL21vZGVscy1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvcHJvamVjdC9jcmVhdGUtbmV3LXByb2plY3QvY3JlYXRlLW5ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3ZhbmlsbGEtdG9kb3MvLi9zcmMvYXBwL3Byb2plY3QvcHJvamVjdC1lZGl0aW9uLXdpbmRvdy9kZWxldGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC9zaGFyZWQvY3JlYXRlLW5ldy1mb3JtLmpzIiwid2VicGFjazovL3ZhbmlsbGEtdG9kb3MvLi9zcmMvYXBwL3RvZG8vY3JlYXRlLXRvLWRvLmpzIiwid2VicGFjazovL3ZhbmlsbGEtdG9kb3MvLi9zcmMvYXBwL3Byb2plY3QvcHJvamVjdC1lZGl0aW9uLXdpbmRvdy91cGRhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL21hbmFnZS10b2Rvcy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL2VkaXQtdG9kby5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL3VwZGF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL2RlbGV0ZS10by1kby5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLXRvZG9zLy4vc3JjL2FwcC90b2RvL2NoYW5nZS10by1kby1zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvc3RhcnQtdXAuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9hcHAvcHJvamVjdC9wcm9qZWN0LWVkaXRpb24td2luZG93L3Byb2plY3QtZWRpdGlvbi13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS10b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9Eb0NsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmZpbmlzaGVkID0gIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2plY3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgUHJvamVjdENsYXNzIH0gZnJvbSBcIi4uLy4uL21vZGVscy9tb2RlbHMtbW9kdWxlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KHByb2plY3QpIHtcblxuICAgIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWlucHV0Jyk7XG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZm9ybUlucHV0c1swXS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0RGVzY3JpcHRpb24gPSBmb3JtSW5wdXRzWzFdLnZhbHVlO1xuICAgIGNvbnN0IG5ld1Byb2plY3REdWVEYXRlID0gZm9ybUlucHV0c1syXS52YWx1ZTtcbiAgICBjb25zdCBuZXdQcm9qZWN0UHJpb3JpdHkgPSBmb3JtSW5wdXRzWzNdLnZhbHVlO1xuICBcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RDbGFzcyhuZXdQcm9qZWN0VGl0bGUsIG5ld1Byb2plY3REZXNjcmlwdGlvbixuZXdQcm9qZWN0RHVlRGF0ZSwgbmV3UHJvamVjdFByaW9yaXR5KTtcblxuICAgIGlmIChwcm9qZWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgbmV3UHJvamVjdC50b2RvcyA9IHByb2plY3QudG9kb3M7XG4gICAgfVxuICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdQcm9qZWN0VGl0bGUsIEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcbiAgXG4gICAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmx1aWQtY29udGFpbmVyJyk7XG4gICAgZmx1aWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShwcm9qZWN0VGl0bGUpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59IiwiaW1wb3J0IHtjcmVhdGVOZXdQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L2NyZWF0ZS1uZXctcHJvamVjdC9jcmVhdGUtbmV3LXByb2plY3QnO1xuaW1wb3J0IHtkZWxldGVQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3QnO1xuaW1wb3J0IHt1cGRhdGVQcm9qZWN0fSBmcm9tICcuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvdXBkYXRlLXByb2plY3QnO1xuaW1wb3J0IHtvcGVuTWFuYWdlVG9kb3NXaW5kb3d9IGZyb20gJy4uL3RvZG8vbWFuYWdlLXRvZG9zJztcbmltcG9ydCB7IGNyZWF0ZVRvRG8gfSBmcm9tICcuLi90b2RvL2NyZWF0ZS10by1kbyc7XG5pbXBvcnQgeyBkZWxldGVUb0RvIH0gZnJvbSAnLi4vdG9kby9kZWxldGUtdG8tZG8nO1xuaW1wb3J0IHtjaGFuZ2VUb0RvU3RhdHVzfSBmcm9tICcuLi90b2RvL2NoYW5nZS10by1kby1zdGF0dXMnO1xuaW1wb3J0IHsgdXBkYXRlVG9EbyB9IGZyb20gJy4uL3RvZG8vdXBkYXRlLXRvLWRvJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0Zvcm0ocHNldWRvRW51bSwgcHJvamVjdCwgdG9kbykge1xuICAgIFxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5cbiAgICBpZiAoZXhpc3RpbmdGb3JtKSB7XG4gICAgICAgIGV4aXN0aW5nRm9ybS5yZW1vdmUoKTtcbiAgICB9XG4gICAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmx1aWQtY29udGFpbmVyJyk7XG4gICAgaWYgKGZsdWlkQ29udGFpbmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBmbHVpZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IHBzZXVkb0VudW07XG4gICAgaDMuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGgzKTtcbiAgICBjb25zdCB0aXRsZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBkdWVEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHByaW9yaXR5RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3QgaW5wdXRzID0gW1xuICAgICAgICB7aW5wdXQ6IHRpdGxlRmllbGQsIGxhYmVsOiBcIk5BTUVcIn0sXG4gICAgICAgIHtpbnB1dDogZGVzY3JpcHRpb25GaWVsZCwgbGFiZWw6IFwiREVTQ1JJUFRJT05cIn0sXG4gICAgICAgIHtpbnB1dDogZHVlRGF0ZUZpZWxkLCBsYWJlbDogXCJEVUUgREFURVwifSxcbiAgICAgICAge2lucHV0OiBwcmlvcml0eUZpZWxkLCBsYWJlbDogXCJQUklPUklUWVwifV07XG5cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGlucHV0LmxhYmVsO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dC5pbnB1dCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbnMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwcmltYXJ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJpbWFyeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbicpO1xuICAgIHByaW1hcnlCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICBwcmltYXJ5QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgIGZsdWlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG5cbiAgICBpZiAocHNldWRvRW51bSA9PSBcIk5FVyBQUk9KRUNUIEZPUk1cIikge1xuICAgICAgICBwcmltYXJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiBjcmVhdGVOZXdQcm9qZWN0KCkpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW1hcnlCdXR0b24pO1xuICAgIH0gZWxzZSBpZiAocHNldWRvRW51bSA9PSBcIkFERCBORVcgVE9ET1wiKSB7XG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gaDMudGV4dENvbnRlbnQgKyBgIFRPICR7cHJvamVjdC50aXRsZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICAgIHByaW1hcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGNyZWF0ZVRvRG8ocHJvamVjdCkpO1xuICAgICAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW1hcnlCdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNwbGl0ID0gcHNldWRvRW51bS5zcGxpdCgnICcpO1xuICAgICAgICBpZiAoc3BsaXRbMF0gPT0gXCJFRElUSU5HXCIpIHtcblxuICAgICAgICAgICAgY29uc3QgZm9ybUlucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Zvcm0taW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBmb3JtSW5wdXRzWzBdO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGZvcm1JbnB1dHNbMV07XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBmb3JtSW5wdXRzWzJdO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGZvcm1JbnB1dHNbM107XG5cbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHByb2plY3QuZGVzY3JpcHRpb247XG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBwcm9qZWN0LmR1ZURhdGU7XG4gICAgICAgICAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBjb25zdCBtYW5hZ2VUb2Rvc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgbWFuYWdlVG9kb3NCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgICAgICAgICAgIG1hbmFnZVRvZG9zQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgICAgICAgICAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcmltYXJ5QnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFuYWdlVG9kb3NCdXR0b24pO1xuXG4gICAgICAgICAgICBpZiAoc3BsaXRbMV0gPT0gXCJQUk9KRUNUXCIpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB1cGRhdGVQcm9qZWN0KHByb2plY3QpKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlIHByb2plY3QnO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKSk7XG4gICAgICAgICAgICAgICAgbWFuYWdlVG9kb3NCdXR0b24udGV4dENvbnRlbnQgPSBcIk1hbmFnZSBQcm9qZWN0J3MgVG9Eb3NcIjtcbiAgICAgICAgICAgICAgICBtYW5hZ2VUb2Rvc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5NYW5hZ2VUb2Rvc1dpbmRvdyhwcm9qZWN0KSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNwbGl0WzFdID09IFwiVE9ET1wiKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gdXBkYXRlVG9Ebyhwcm9qZWN0LCB0b2RvKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUb0RvJztcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGRlbGV0ZVRvRG8ocHJvamVjdCwgdG9kbykpO1xuICAgICAgICAgICAgICAgIG1hbmFnZVRvZG9zQnV0dG9uLnRleHRDb250ZW50ID0gXCJDaGFuZ2Ugc3RhdHVzXCI7XG4gICAgICAgICAgICAgICAgbWFuYWdlVG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VUb0RvU3RhdHVzKHByb2plY3QsIHRvZG8pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB9XG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxufSIsImltcG9ydCB7IFRvRG9DbGFzcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxzLW1vZHVsZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9Ebyhwcm9qZWN0KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHByb2plY3QudGl0bGUpO1xuXG4gIGNvbnN0IGZvcm1JbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb3JtLWlucHV0Jyk7XG4gIGNvbnN0IG5ld1RvRG9UaXRsZSA9IGZvcm1JbnB1dHNbMF0udmFsdWU7XG4gIGNvbnN0IG5ld1RvRG9EZXNjcmlwdGlvbiA9IGZvcm1JbnB1dHNbMV0udmFsdWU7XG4gIGNvbnN0IG5ld1RvRG9EdWVEYXRlID0gZm9ybUlucHV0c1syXS52YWx1ZTtcbiAgY29uc3QgbmV3VG9Eb1ByaW9yaXR5ID0gZm9ybUlucHV0c1szXS52YWx1ZTtcblxuICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG9DbGFzcyhuZXdUb0RvVGl0bGUsIG5ld1RvRG9EZXNjcmlwdGlvbiwgbmV3VG9Eb0R1ZURhdGUsIG5ld1RvRG9Qcmlvcml0eSk7XG4gIHByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG5cbiAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmx1aWQtY29udGFpbmVyJyk7XG4gIGZsdWlkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdCB9IGZyb20gXCIuLi9jcmVhdGUtbmV3LXByb2plY3QvY3JlYXRlLW5ldy1wcm9qZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocHJvamVjdC50aXRsZSk7XG4gIGNyZWF0ZU5ld1Byb2plY3QocHJvamVjdCk7XG59IiwiaW1wb3J0IHsgY3JlYXRlTmV3Rm9ybSB9IGZyb20gXCIuLi9zaGFyZWQvY3JlYXRlLW5ldy1mb3JtXCI7XG5pbXBvcnQgeyBvcGVuRWRpdFRvRG9XaW5kb3cgfSBmcm9tIFwiLi9lZGl0LXRvZG9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5NYW5hZ2VUb2Rvc1dpbmRvdyhwcm9qZWN0KSB7XG5cbiAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuICBpZiAoZXhpc3RpbmdGb3JtKSB7XG4gICAgICBleGlzdGluZ0Zvcm0ucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBmbHVpZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbHVpZC1jb250YWluZXInKTtcbiAgaWYgKGZsdWlkQ29udGFpbmVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgZmx1aWRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFuYWdlLXRvZG9zLWZvcm0tZm9ybS1jb250YWluZXInKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaDMuY2xhc3NMaXN0LmFkZCgnZm9ybS1oZWFkZXInKTtcbiAgaDMudGV4dENvbnRlbnQgPSBgTUFOQUdFIFRPRE9TIEZPUiAke3Byb2plY3QudGl0bGUudG9VcHBlckNhc2UoKX1gO1xuICBmb3JtLmFwcGVuZENoaWxkKGgzKTtcblxuXG4gIGlmIChwcm9qZWN0LnRvZG9zID09IHVuZGVmaW5lZCB8fCBwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdUaGlzIHByb2plY3QgY3VycmVudGx5IGhhcyBubyBUb0Rvcy4nO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgnbm8tdG9kb3MnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHApO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb3MtY29udGFpbmVyJylcbiAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICBpZiAodG9kby5maW5pc2hlZCkge1xuICAgICAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgICAgfVxuICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3BlbkVkaXRUb0RvV2luZG93KHRvZG8sIHByb2plY3QpKVxuICAgICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICB9KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcbiAgfVxuICBjb25zdCBjcmVhdGVUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNyZWF0ZVRvRG9CdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b24nKTtcbiAgY3JlYXRlVG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgVG9Ebyc7XG4gIGNyZWF0ZVRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVOZXdGb3JtKFwiQUREIE5FVyBUT0RPXCIsIHByb2plY3QpKTtcbiAgY3JlYXRlVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUb0RvQnV0dG9uKTtcblxuICBmbHVpZENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKVxufSIsImltcG9ydCB7IGNyZWF0ZU5ld0Zvcm0gfSBmcm9tIFwiLi4vc2hhcmVkL2NyZWF0ZS1uZXctZm9ybVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVkaXRUb0RvV2luZG93KHRvZG8sIHByb2plY3QpIHtcbiAgY29uc3QgcHNldWRvRW51bSA9IGBFRElUSU5HIFRPRE8gJHsodG9kby50aXRsZSkudG9VcHBlckNhc2UoKX0gRk9SIFBST0pFQ1QgJHtwcm9qZWN0LnRpdGxlLnRvVXBwZXJDYXNlKCl9YDtcbiAgY3JlYXRlTmV3Rm9ybShwc2V1ZG9FbnVtLCB0b2RvLCBwcm9qZWN0KTtcblxufSIsImltcG9ydCB7IFRvRG9DbGFzcyB9IGZyb20gXCIuLi9tb2RlbHMvbW9kZWxzLW1vZHVsZVwiO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRvRG8odG9kbywgcHJvamVjdCkge1xuICBjb25zdCBpbmRleE9mID0gcHJvamVjdC50b2Rvcy5pbmRleE9mKHRvZG8pO1xuICBjb25zdCBmb3JtSW5wdXRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybS1pbnB1dCcpO1xuICBjb25zdCBuZXdUb0RvVGl0bGUgPSBmb3JtSW5wdXRzWzBdLnZhbHVlO1xuICBjb25zdCBuZXdUb0RvRGVzY3JpcHRpb24gPSBmb3JtSW5wdXRzWzFdLnZhbHVlO1xuICBjb25zdCBuZXdUb0RvRHVlRGF0ZSA9IGZvcm1JbnB1dHNbMl0udmFsdWU7XG4gIGNvbnN0IG5ld1RvRG9Qcmlvcml0eSA9IGZvcm1JbnB1dHNbM10udmFsdWU7XG5cbiAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvQ2xhc3MobmV3VG9Eb1RpdGxlLCBuZXdUb0RvRGVzY3JpcHRpb24sIG5ld1RvRG9EdWVEYXRlLCBuZXdUb0RvUHJpb3JpdHkpO1xuXG4gIHByb2plY3QudG9kb3NbaW5kZXhPZl0gPSAgbmV3VG9kbztcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdCkpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59IiwiaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvZGVsZXRlLXByb2plY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9Ebyh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkID0gcHJvamVjdC50b2Rvcy5maWx0ZXIodG9kb0l0ZW0gPT4gdG9kb0l0ZW0gIT0gdG9kbyk7XG4gIHByb2plY3QudG9kb3MgPSBmaWx0ZXJlZDtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0LnRpdGxlKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbn0iLCJpbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvcHJvamVjdC1lZGl0aW9uLXdpbmRvdy9kZWxldGUtcHJvamVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9Eb1N0YXR1cyh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnN0IGluZGV4T2YgPSBwcm9qZWN0LnRvZG9zLmluZGV4T2YodG9kbyk7XG4gIHRvZG8uZmluaXNoZWQgPSAhKHRvZG8uZmluaXNoZWQpO1xuICBwcm9qZWN0LnRvZG9zW2luZGV4T2ZdID0gIHRvZG87XG4gIGRlbGV0ZVByb2plY3QocHJvamVjdC50aXRsZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KHByb2plY3QpKTtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSIsIi8vIENPUkU7XG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmltcG9ydCB7Y3JlYXRlTmV3Rm9ybX0gZnJvbSAnLi9zaGFyZWQvY3JlYXRlLW5ldy1mb3JtJztcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RFZGl0aW9uV2luZG93IH0gZnJvbSAnLi9wcm9qZWN0L3Byb2plY3QtZWRpdGlvbi13aW5kb3cvcHJvamVjdC1lZGl0aW9uLXdpbmRvdyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFVwICgpIHtcbiAgICBjb25zdCBwcm9qZWN0c0Zyb21TdG9yYWdlID0gZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSgpO1xuICAgIFxuICAgIGlmIChwcm9qZWN0c0Zyb21TdG9yYWdlLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGFwcGVuZE5vVG9kb3NNZXNzYWdlKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVNYWluQ29udGVudChwcm9qZWN0c0Zyb21TdG9yYWdlKTtcbiAgICB9O1xuICAgIHByZXBhcmVOZWNlc3NhcnlFbGVtZW50cygpIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSgpIHtcbiAgICBsZXQgdmFsdWVzID0gW10sXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSksXG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICB2YWx1ZXMucHVzaChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmROb1RvZG9zTWVzc2FnZSgpIHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIllvdSBjdXJyZW50bHkgaGF2ZSBubyBwcm9qZWN0cy4gVHJ5IGFkZGluZyBhIG5ldyBvbmUgcmlnaHQgbm93IVwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudChwcm9qZWN0c0Zyb21TdG9yYWdlKSB7XG4gICAgY3JlYXRlUHJvamVjdHNMaXN0KHByb2plY3RzRnJvbVN0b3JhZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxpc3RIZWFkZXIoKSB7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gXCJZT1VSIFBST0pFQ1RTXCI7XG4gICAgaDIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtbGlzdC1oZWFkZXInKTtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QtY29udGFpbmVyJykgICAgIFxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNMaXN0KHByb2plY3RzRnJvbVN0b3JhZ2UpIHtcbiAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1saXN0LWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgY3JlYXRlTGlzdEhlYWRlcigpO1xuXG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWxpc3QnKVxuICAgIHByb2plY3RzRnJvbVN0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEZyb21TdG9yYWdlID0gSlNPTi5wYXJzZShwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RMaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3RGcm9tU3RvcmFnZS50aXRsZTtcbiAgICAgICAgcHJvamVjdExpc3RJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLWxpc3QtaXRlbScpO1xuICAgICAgICBwcm9qZWN0TGlzdEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVQcm9qZWN0RWRpdGlvbldpbmRvdyhwcm9qZWN0RnJvbVN0b3JhZ2UpKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RJdGVtKTtcbiAgICB9KTtcblxuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodWwpO1xufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZU5lY2Vzc2FyeUVsZW1lbnRzKCkge1xuICAgIGNyZWF0ZUJ1dHRvbnNDb250YWluZXIoKTtcbiAgICBjcmVhdGVGbHVpZENvbnRhaW5lcigpXG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXR0b25zLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgUFJPSkVDVFwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbWFpbi1idXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IGNyZWF0ZU5ld0Zvcm0oXCJORVcgUFJPSkVDVCBGT1JNXCIpKTtcbiAgICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmx1aWRDb250YWluZXIoKSB7XG4gICAgY29uc3QgZmx1aWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmbHVpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbHVpZC1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGZsdWlkQ29udGFpbmVyKTtcbn1cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQge2NyZWF0ZU5ld0Zvcm19IGZyb20gJy4uLy4uL3NoYXJlZC9jcmVhdGUtbmV3LWZvcm0nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVkaXRpb25XaW5kb3cocHJvamVjdCl7XG5cbiAgY29uc3QgcHNldWRvRW51bSA9IGBFRElUSU5HIFBST0pFQ1QgJHsocHJvamVjdC50aXRsZSkudG9VcHBlckNhc2UoKX0gYDtcbiAgY3JlYXRlTmV3Rm9ybShwc2V1ZG9FbnVtLCBwcm9qZWN0KTtcblxufVxuIiwiaW1wb3J0IHsgc3RhcnRVcCB9IGZyb20gXCIuL2FwcC9zdGFydC11cFwiO1xuXG5zdGFydFVwKCk7Il0sIm5hbWVzIjpbIlRvRG9DbGFzcyIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsInRoaXMiLCJmaW5pc2hlZCIsIlByb2plY3RDbGFzcyIsInRvZG9zIiwiY3JlYXRlTmV3UHJvamVjdCIsInByb2plY3QiLCJmb3JtSW5wdXRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibmV3UHJvamVjdFRpdGxlIiwidmFsdWUiLCJuZXdQcm9qZWN0RGVzY3JpcHRpb24iLCJuZXdQcm9qZWN0RHVlRGF0ZSIsIm5ld1Byb2plY3RQcmlvcml0eSIsIm5ld1Byb2plY3QiLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImRlbGV0ZVByb2plY3QiLCJwcm9qZWN0VGl0bGUiLCJyZW1vdmVJdGVtIiwiY3JlYXRlTmV3Rm9ybSIsInBzZXVkb0VudW0iLCJ0b2RvIiwiZXhpc3RpbmdGb3JtIiwicmVtb3ZlIiwiZmx1aWRDb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9ybSIsImgzIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImlucHV0IiwibGFiZWwiLCJmb3JFYWNoIiwiYnV0dG9uc0NvbnRhaW5lciIsInByaW1hcnlCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwidG9VcHBlckNhc2UiLCJuZXdUb0RvVGl0bGUiLCJuZXdUb0RvRGVzY3JpcHRpb24iLCJuZXdUb0RvRHVlRGF0ZSIsIm5ld1RvRG9Qcmlvcml0eSIsIm5ld1RvZG8iLCJwdXNoIiwiY3JlYXRlVG9EbyIsInNwbGl0IiwidGl0bGVJbnB1dCIsImRlc2NyaXB0aW9uSW5wdXQiLCJkdWVEYXRlSW5wdXQiLCJwcmlvcml0eUlucHV0IiwiZGVsZXRlQnV0dG9uIiwibWFuYWdlVG9kb3NCdXR0b24iLCJ1cGRhdGVQcm9qZWN0IiwibGVuZ3RoIiwicCIsInRvZG9zQ29udGFpbmVyIiwiYnV0dG9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGVuRWRpdFRvRG9XaW5kb3ciLCJjcmVhdGVUb0RvQnV0dG9uIiwib3Blbk1hbmFnZVRvZG9zV2luZG93IiwiaW5kZXhPZiIsInVwZGF0ZVRvRG8iLCJmaWx0ZXJlZCIsImZpbHRlciIsInRvZG9JdGVtIiwiZGVsZXRlVG9EbyIsImNoYW5nZVRvRG9TdGF0dXMiLCJtYWluIiwicHJvamVjdHNGcm9tU3RvcmFnZSIsInZhbHVlcyIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJnZXRJdGVtIiwiZ2V0UHJvamVjdHNGcm9tU3RvcmFnZSIsImFwcGVuZE5vVG9kb3NNZXNzYWdlIiwibGlzdENvbnRhaW5lciIsImgyIiwiY3JlYXRlTGlzdEhlYWRlciIsInVsIiwicHJvamVjdEZyb21TdG9yYWdlIiwicGFyc2UiLCJwcm9qZWN0TGlzdEl0ZW0iLCJjcmVhdGVQcm9qZWN0RWRpdGlvbldpbmRvdyIsImNyZWF0ZVByb2plY3RzTGlzdCIsImNyZWF0ZU1haW5Db250ZW50IiwiYWRkUHJvamVjdEJ1dHRvbiIsImNyZWF0ZUJ1dHRvbnNDb250YWluZXIiLCJjcmVhdGVGbHVpZENvbnRhaW5lciIsInN0YXJ0VXAiXSwic291cmNlUm9vdCI6IiJ9