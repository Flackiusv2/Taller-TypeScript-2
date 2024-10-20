import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById('average');
var serieDetailsCard = document.getElementById('serie-details');
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                                <td><a href=\"#\" class=\"text-decoration-none serie-link\" data-id=\"").concat(serie.id, "\">").concat(serie.name, "</a></td>\n                                <td>").concat(serie.channel, "</td> \n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        var linkElement = trElement.querySelector('.serie-link');
        linkElement.addEventListener('click', function (event) {
            event.preventDefault();
            showSeriesDetail(serie);
        });
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = series.length;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    var average = Math.round(totalSeasons / totalSeries);
    return average;
}
function showSeriesDetail(serie) {
    var cardImage = serieDetailsCard.querySelector('.card-img-top');
    var cardTitle = serieDetailsCard.querySelector('.card-title');
    var cardText = serieDetailsCard.querySelector('.card-text');
    var cardLink = serieDetailsCard.querySelector('.card-link');
    cardImage.src = serie.image;
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardText.textContent = serie.sinopsis;
    cardLink.textContent = serie.link;
    cardLink.href = serie.link;
    serieDetailsCard.classList.remove('d-none');
}
