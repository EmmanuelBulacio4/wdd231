function setSectionSelection() {
    const sectionSelect = document.querySelector("#sectionNumber");
    sections.forEach((section) => {                          //byuCourse were removed. Step 3 - 3
        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = `${section.sectionNumber}`;
        sectionSelect.appendChild(option);
    });
}

export function setSectionSelection(sections) {}