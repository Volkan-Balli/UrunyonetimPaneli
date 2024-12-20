document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        const productName = document.getElementById("productName").value;
        const productPrice = document.getElementById("productPrice").value;
        const miktar = document.getElementById("miktar").value;


        const row = document.createElement("tr");


        row.innerHTML = `
            <td class="px-4 py-2 text-sm text-gray-900">${productName}</td>
            <td class="px-4 py-2 text-sm text-gray-900">${productPrice} TL</td>
            <td class="px-4 py-2 text-sm text-gray-900">${miktar}</td>
            <td class="px-4 py-2 text-sm text-gray-900">
                <button class="text-red-600 hover:text-red-800">Sil</button>
            </td>
        `;

        row.querySelector("button").addEventListener("click", () => {
            row.remove();
        });

        tableBody.appendChild(row);

        form.reset();
    });
});
