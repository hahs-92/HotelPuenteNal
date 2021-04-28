import * as React from "react"

export default function Logo(props) {
  return (
    <svg
      height={512}
      viewBox="0 0 512 512"
      width={512}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15.479 282.042h44.275C60.123 174.139 148.012 86.468 256 86.468s195.877 87.671 196.246 195.574h44.275a14.998 14.998 0 0014.972-15.92c-3.992-64.988-32.339-125.461-79.818-170.28-47.683-45.011-110.072-69.8-175.675-69.8s-127.992 24.789-175.675 69.8C32.846 140.661 4.499 201.135.507 266.123a14.998 14.998 0 0014.972 15.919z" />
      <path d="M422.246 282.042c-.369-91.361-74.801-165.574-166.246-165.574S90.123 190.681 89.754 282.042h30.51c.369-74.537 61.114-135.063 135.736-135.063s135.367 60.527 135.736 135.063zM37 341.356c4.867-.904 9.875-1.399 15-1.399s10.133.496 15 1.399v-29.314H37zM52 369.957c-28.673 0-52 23.327-52 52s23.327 52 52 52 52-23.327 52-52-23.327-52-52-52zM445 341.356c4.867-.904 9.875-1.399 15-1.399s10.133.496 15 1.399v-29.314h-30zM460 369.957c-28.673 0-52 23.327-52 52s23.327 52 52 52 52-23.327 52-52-23.327-52-52-52zM271 364.958c0 8.284-6.716 15-15 15s-15-6.716-15-15v-52.915H108v25.915c0 81.607 66.393 148 148 148s148-66.393 148-148v-25.915H271zm-53 0c0 8.284-6.716 15-15 15s-15-6.716-15-15h-13c-8.284 0-15-6.716-15-15s6.716-15 15-15h28c8.284 0 15 6.716 15 15zm76-15c0-8.284 6.716-15 15-15h28c8.284 0 15 6.716 15 15s-6.716 15-15 15h-13c0 8.284-6.716 15-15 15s-15-6.716-15-15zm-3 72c0 8.284-6.716 15-15 15h-38c-8.284 0-15-6.716-15-15s6.716-15 15-15h38c8.284 0 15 6.715 15 15z" />
      <path d="M361.736 282.042c-.275-43.197-26.582-80.327-63.989-96.465 15.645 12.365 25.714 31.49 25.714 52.933 0 16.58-6.024 31.773-15.983 43.532z" />
      <circle
        cx={256}
        cy={238.511}
        transform="rotate(-9.25 256.124 238.935)"
        r={37.461}
      />
      <path d="M214.253 185.578c-37.407 16.138-63.715 53.268-63.989 96.465h54.258c-9.959-11.759-15.983-26.951-15.983-43.532 0-21.444 10.069-40.568 25.714-52.933z" />
    </svg>
  )
}