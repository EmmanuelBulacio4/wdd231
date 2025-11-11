function setSectionSelection(sections) {
    const sectionSelect = document.querySelector("#sectionNumber");
    sections.forEach((section) => {       //se eliminó byuiCourse antes del section
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}

export { setSectionSelection}




// En este archivo era la redundancia del objeto byui.Course que se eliminó de la linea 3. 