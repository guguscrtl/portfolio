import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ParcoursUgo = () => {
  const parcours = [
    {
      id: 1,
      year: "2022",
      title: "Baccalauréat",
      description: (
        <>
          Obtention du baccalauréat<br />
          Série: Générale<br />
          Spécialités: Mathématiques, Physique-Chimie, SVT<br />
          Option: Mathématiques expertes<br />
          Mention: Bien
        </>
      ),
      details: "Durant mon baccalauréat, j’ai approfondi les mathématiques et les sciences expérimentales...",
    },
    {
      id: 2,
      year: "2022-2025",
      title: "BUT Informatique",
      description: (
        <>
          Spécialité: Informatique<br />
          Parcours: "Réalisation d'applications"
        </>
      ),
      details: "Le BUT Informatique m'a permis d’acquérir des compétences en développement logiciel, gestion de projet...",
    },
    {
      id: 3,
      year: "2023-2024",
      title: "eBrigade - TPE",
      description: (
        <>
          Alternance<br />
          Poste: Développeur web fullstack<br />
          Langages: HTML, CSS, JS, PHP
        </>
      ),
      details: "Au sein de eBrigade, j’ai travaillé sur le développement d’un ERP destiné aux pompiers...",
    },
    {
      id: 4,
      year: "2024-2025",
      title: "CAAS - GE",
      description: (
        <>
          Alternance<br />
          Poste: Développeur web fullstack<br />
          Langages: HTML, CSS, JQuery, PHP, SQL
        </>
      ),
      details: "Chez CAAS, je développe une plateforme intranet optimisant la gestion des documents d'assurance...",
    },
  ];

  return (
    <div className="rowParcoursUgo">
      {parcours.map((item) => (
        <div key={item.id} className="col-md-6">
          <div className="blocParcoursUgo p-3 border rounded">
            <div className="titreBlocParcoursUgo">{item.year}</div>
            <div className="sousTitreBlocParcoursUgo">{item.title}</div>
            <div className="texteBlocParcoursUgo">
              <div>{item.description}</div>
              <div>
                <button
                  className="btn-sm btn-voir-plus mt-2"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${item.id}`}
                >
                  Voir plus
                </button>
              </div>
            </div>
          </div>

          {/* Modal Bootstrap */}
          <div
            className="modal fade"
            id={`modal-${item.id}`}
            tabIndex={-1}
            aria-labelledby={`modalLabel-${item.id}`}
            aria-hidden="true"
            data-bs-theme="dark"
          >
            <div className="modal-dialog">
              <div className="modal-content bg-dark text-light">
                <div className="modal-header border-secondary">
                  <h5 className="modal-title" id={`modalLabel-${item.id}`}>
                    {item.title} - {item.year}
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{item.details}</div>
                <div className="modal-footer border-secondary">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ParcoursUgo;
