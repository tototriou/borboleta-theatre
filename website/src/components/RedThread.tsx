/**
 * Fil rouge decoratif qui serpente sur la page.
 * SVG genere en code, positionne en absolute pour ne pas affecter le layout.
 */
export default function RedThread({ className, opacity = 0.65 }: { className?: string; opacity?: number }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Trace reproduit depuis l'image de reference */}
      <path
        d={[
          // 1. Entre par le haut-gauche, monte legerement vers la droite
          "M120 100",
          "C200 70, 320 40, 420 50",
          // 2. Petite boucle serree haut-centre (comme un 'e' cursif)
          "C470 55, 490 30, 480 60",
          "C470 90, 440 70, 450 50",
          "C460 30, 500 50, 500 80",
          // 3. Part vers la droite puis descend fort en arc vers la gauche
          "C520 60, 620 100, 650 180",
          "C680 260, 500 250, 350 320",
          "C200 390, 100 460, 80 540",
          // 4. Grande boucle bas-gauche : descend, tourne, remonte, se croise
          "C60 620, 100 720, 200 740",
          "C320 760, 400 700, 380 600",
          "C360 500, 260 440, 180 490",
          "C100 540, 80 660, 160 720",
          "C240 780, 380 740, 440 650",
          // 5. Remonte en diagonale vers le centre, passe au-dessus
          "C500 560, 480 440, 520 380",
          "C560 320, 500 500, 540 580",
          // 6. Petite boucle bas-centre
          "C580 660, 620 700, 600 660",
          "C580 620, 550 640, 570 680",
          "C590 720, 640 680, 650 620",
          // 7. Remonte vers la droite
          "C660 560, 700 440, 760 360",
          // 8. Tres grande boucle ovale droite
          "C820 280, 920 200, 1020 220",
          "C1120 240, 1180 350, 1160 460",
          "C1140 570, 1060 640, 960 620",
          "C860 600, 800 540, 810 470",
          "C820 400, 880 350, 960 380",
          "C1040 410, 1100 490, 1080 570",
          // 9. Sort par la droite avec une derniere courbe
          "C1060 650, 1140 700, 1180 660",
        ].join(" ")}
        stroke="#c43c3c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity={opacity}
      />
    </svg>
  );
}
