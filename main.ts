import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('average')!; 
let serieDetailsCard: HTMLElement = document.getElementById('serie-details')!;


renderSeriesInTable(dataSeries);

averageSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series')
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = ` <td>${serie.id}</td>
                                <td><a href="#" class="text-decoration-none serie-link" data-id="${serie.id}">${serie.name}</a></td>
                                <td>${serie.channel}</td> 
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement)

    const linkElement = trElement.querySelector('.serie-link') as HTMLElement;
    linkElement.addEventListener('click', (event) => {
        event.preventDefault();
        showSeriesDetail(serie);
         
    });
  });
}

function getAverageSeasons(series: Serie[]): number{
    let totalSeasons: number = 0;
    let totalSeries : number = series.length
    series.forEach((serie) => totalSeasons += serie.seasons)
    let average : number = Math.round(totalSeasons / totalSeries)
    return average
}

function showSeriesDetail(serie: Serie): void {
    const cardImage = serieDetailsCard.querySelector('.card-img-top') as HTMLImageElement;
    const cardTitle = serieDetailsCard.querySelector('.card-title') as HTMLElement;
    const cardText = serieDetailsCard.querySelector('.card-text') as HTMLElement;
    const cardLink = serieDetailsCard.querySelector('.card-link') as HTMLAnchorElement;
  
  
    cardImage.src = serie.image;
    cardImage.alt = serie.name;
    cardTitle.textContent = serie.name;
    cardText.textContent = serie.sinopsis;
    cardLink.textContent = serie.link; 
    cardLink.href = serie.link; 
  
    serieDetailsCard.classList.remove('d-none');
  }