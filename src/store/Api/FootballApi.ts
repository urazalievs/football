import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface IGetLeaguesResponse {
    competitions: [
        id: number,
        area: {
            id: number,
            name: string,
            code: string,
            flag: null
        },
        name: string,
        code: string,
        type: string,
        emblem: null,
        plan: string,
        currentSeason: {
            id: number,
            startDate: string,
            endDate: string,
            currentMatchday: number,
            winner: null
        },
        numberOfAvailableSeasons: number,
        lastUpdated: string
    ]
}
interface IGetOneArrayResponse {
    id: number,
    area: {
        id: number,
        name: string,
        code: string,
        flag: string,
    },
    name: string,
    code: string,
    type: string,
    emblem: string,
    currentSeason: {
        id: number,
        startDate: string,
        endDate: string,
        currentMatchday: number
    },
    numberOfAvailableSeasons: number,
    lastUpdated: string
}
interface IGetTenScorersResconce {
    scorers: [
        {
            player: {
                id: number,
                name: string,
                firstName: string,
                lastName: string,
                dateOfBirth: string,
                nationality: string,
                section: string,
                position: null,
                shirtNumber: null,
                lastUpdated: string
            },
            team: {
                id: number,
                name: string,
                shortName: string,
                tla: string,
                crest: string,
                address: string,
                website: string,
                founded: number,
                clubColors: string,
                venue: string,
                lastUpdated: string
            },
            playedMatches: number,
            goals: number,
            assists: number,
            penalties: null
        }
    ]
}
interface IGetCountryResponce {
    count: number,
    filters: object,
    areas: [
        {
            id: number,
            name: string,
            countryCode: string,
            flag: null,
            parentAreaId: number,
            parentArea: string
        },]
}
interface IGetAllMatchesResponse {
    matches: [{
        area: {
            id: number,
            name: string,
            code: string,
            flag: string
        },
        competition: {
            id: number,
            name: string,
            code: string,
            type: string,
            emblem: string
        },
        season: {
            id: number,
            startDate: string,
            endDate: string,
            currentMatchday: number,
            winner: null,
            stages: [
                string
            ]
        },
        id: number,
        utcDate: string,
        status: string,
        minute: string,
        injuryTime: number,
        attendance: null,
        venue: string,
        matchday: number,
        stage: string,
        group: null,
        lastUpdated: string,
        homeTeam: {
            id: number,
            name: string,
            shortName: string,
            tla: string,
            crest: string,
            coach: {
                id: number,
                name: string,
                nationality: string
            },
            leagueRank: number,
            formation: string,
            lineup: [],
            bench: []
        },
        awayTeam: {
            id: number,
            name: string,
            shortName: string,
            tla: string,
            crest: string,
            coach: {
                id: number,
                name: string,
                nationality: string
            },
            leagueRank: number,
            formation: string,
            lineup: [],
            bench: []
        },
        score: {
            winner: string,
            duration: string,
            fullTime: {
                home: number,
                away: number
            },
            halfTime: {
                home: number,
                away: number
            }
        },
        goals: [
            {
                minute: number,
                injuryTime: null,
                type: string,
                team: {
                    id: number,
                    name: string
                },
                scorer: {
                    id: number,
                    name: string
                },
                assist: null,
                score: {
                    home: number,
                    away: number
                }
            },
            {
                minute: number,
                injuryTime: null,
                type: string,
                team: {
                    id: number,
                    name: string
                },
                scorer: {
                    id: number,
                    name: string
                },
                assist: null,
                score: {
                    home: number,
                    away: number
                }
            },
            {
                minute: number,
                injuryTime: null,
                type: string,
                team: {
                    id: number,
                    name: string
                },
                scorer: {
                    id: number,
                    name: string
                },
                assist: {
                    id: number,
                    name: string
                },
                score: {
                    home: number,
                    away: number
                }
            }
        ],
        penalties: [
            {
                player: {
                    id: number,
                    name: string
                },
                team: {
                    id: number,
                    name: string
                },
                scored: true
            },
            {
                player: {
                    id: number,
                    name: string
                },
                team: {
                    id: number,
                    name: string
                },
                scored: true
            }
        ],
        bookings: [],
        substitutions: [],
        odds: {
            homeWin: number,
            draw: number,
            awayWin: number
        },
        referees: [
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            },
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            },
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            },
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            },
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            },
            {
                id: number,
                name: string,
                type: string,
                nationality: string
            }
        ]
    }]
}
interface IgetMatvfkgd {
    id: number | undefined,
    status: string
}
interface IGetPersonResponse {
    id: number,
    name: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    nationality: string,
    section: string,
    position: string,
    shirtNumber: number,
    lastUpdated: string,
    currentTeam: {
        area: {
            id: number,
            name: string,
            code: string,
            flag: string
        },
        id: number,
        name: string,
        shortName: string,
        tla: string,
        crest: string,
        address: string,
        website: string,
        founded: number,
        clubColors: string,
        venue: string,
        runningCompetitions: [
            {
                id: number,
                name: string,
                code: string,
                type: string,
                emblem: string
            }
        ],
        contract: {
            start: string,
            until: string
        }
    }



}
interface IGetFinishedMatchesResponse extends IGetAllMatchesResponse { }
interface IGetAllTeamsResponse {
    teams: [
        {
            id: number,
            name: string,
            shortName: string,
            tla: string,
            crest: string,
            address: string,
            website: string,
            founded: number,
            clubColors: string,
            venue: string,
            lastUpdated: string
        },
    ]
}
interface IgetOneTeamResponse {
    area: {
        id: number,
        name: string,
        code: string,
        flag: string
    },
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    address: string,
    website: string,
    founded: number,
    clubColors: string,
    venue: string,
    runningCompetitions: [
        {
            id: number,
            name: string,
            code: string,
            type: string,
            emblem: string
        },
    ],
    coach: {
        id: number,
        firstName: string,
        lastName: string,
        name: string,
        dateOfBirth: string,
        nationality: string,
        contract: {
            start: string,
            until: string
        }
    },
    squad: [
        {
            id: number,
            name: string,
            position: string,
            dateOfBirth: string,
            nationality: string
        },
    ]
}
interface IgetOnePlayerResponse {
    person: {
        id: number,
        name: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        nationality: string,
        section: string,
        position: null,
        shirtNumber: null,
        lastUpdated: string
    },
    matches: [
        {
            area: {
                id: number,
                name: string,
                code: string,
                flag: string
            },
            competition: {
                id: number,
                name: string,
                code: string,
                type: string,
                emblem: string
            },
            season: {
                id: number,
                startDate: string,
                endDate: string,
                currentMatchday: number,
                winner: null
            },
            id: number,
            utcDate: string,
            status: string,
            matchday: number,
            stage: string,
            group: null,
            lastUpdated: string,
            homeTeam: {
                id: number,
                name: string,
                shortName: string,
                tla: string,
                crest: string
            },
            awayTeam: {
                id: number,
                name: string,
                shortName: string,
                tla: string,
                crest: string
            },
            score: {
                winner: string,
                duration: string,
                fullTime: {
                    home: number,
                    away: number
                },
                halfTime: {
                    home: number,
                    away: number
                }
            },
            odds: {
                msg: string
            },
            referees: [
                {
                    id: number,
                    name: string,
                    type: string,
                    nationality: string
                }
            ]
        },
    ]
}
interface IGetTableResponse {
    filters: {
        season: string
    },
    area: {
        id: number,
        name: string,
        code: string,
        flag: string
    },
    competition: {
        id: number,
        name: string,
        code: string,
        type: string,
        emblem: string
    },
    season: {
        id: number,
        startDate: string,
        endDate: string,
        currentMatchday: number,
        winner: null
    },
    standings: [
        {
            stage: string,
            type: string,
            group: null,
            table: [
                {
                    position: number,
                    team: {
                        id: number,
                        name: string,
                        shortName: string,
                        tla: string,
                        crest: string
                    },
                    playedGames: number,
                    form: string,
                    won: number,
                    draw: number,
                    lost: number,
                    points: number,
                    goalsFor: number,
                    goalsAgainst: number,
                    goalDifference: number
                },
            ]
        },
    ]
}

export const footballApi = createApi({
    reducerPath: "footballApi",
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers) => {
            headers.set("X-Auth-Token", "ca1ace4e57e4489f85e13837d74f75e0");
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getLeagues: builder.query<IGetLeaguesResponse, void>({
            query: () => "/competitions"
        }),
        getOneLeague: builder.query<IGetOneArrayResponse, void>({
            query: () => "/competitions/SA"
        }),
        getCounty: builder.query<IGetCountryResponce, void>({
            query: () => '/areas',
            keepUnusedDataFor: 300
        }),
        getAllMatches: builder.query<IGetAllMatchesResponse, IgetMatvfkgd>({
            query: ({ id, status }) => `/competitions/${id}/matches?season=2024&status=${status}`,
            keepUnusedDataFor: 300
        }),
        getFinishedMatches: builder.query<IGetFinishedMatchesResponse, number>({
            query: (id) => `/competitions/${id}/matches?season=2024&status=FINISHED`,
            keepUnusedDataFor: 300
        }),
        getPersonOneP: builder.query<IGetPersonResponse, number>({
            query: (id) => `/persons/${id}`,
            keepUnusedDataFor: 300
        }),
        getAllTeam: builder.query<IGetAllTeamsResponse, number>({
            query: (id) => `/teams?limit=${id}`,
            keepUnusedDataFor: 300
        }),
        getOneTema: builder.query<IgetOneTeamResponse, number>({
            query: (id) => `/teams/${id}`
        }),
        getOnePlayer: builder.query<IgetOnePlayerResponse, number>({
            query: (id) => `/persons/${id}/matches`
        }),
        getTableLeague: builder.query<IGetTableResponse, number>({
            query: (id) => `/competitions/${id}/standings`
        }),
        getTenScorers: builder.query<IGetTenScorersResconce, number>({
            query: (id) => `/competitions/${id}/scorers`
        }),
    })
})

export const {
    useGetLeaguesQuery,
    useGetOneLeagueQuery,
    useGetTenScorersQuery,
    useGetCountyQuery,
    useGetAllMatchesQuery,
    useGetFinishedMatchesQuery,
    useGetAllTeamQuery,
    useGetOneTemaQuery,
    useGetOnePlayerQuery,
    useGetPersonOnePQuery,
    useGetTableLeagueQuery,
} = footballApi