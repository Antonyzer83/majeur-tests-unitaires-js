// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://prevision-meteo.ch/services/json/aix-en-provence",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            icon_big:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
        })
      );
    }
  ),
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          "results": [
            {
              "name": {
                "title": "Mrs",
                "first": "Laura",
                "last": "Boyd"
              },
              "picture": {
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
              }
            }
          ]
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Météo actuel/i));
  expect(container.querySelector("#meteoImg")?.getAttribute('src')).toBe("https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png");
});

test("load random user mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Utilisateur/i));
  expect(container.querySelector("#userImg")?.getAttribute('src')).toBe("https://randomuser.me/api/portraits/thumb/women/2.jpg");
  expect(container.querySelector("#userData")?.innerHTML).toBe("Mrs Laura Boyd");
});