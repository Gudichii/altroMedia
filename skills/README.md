# CC DELIVERY — skillovi

Ovo je izvor istine za skillove delivery sustava. Skillovi se odavde sinkroniziraju
u Claude.ai skill store; store je runtime kopija, ne mjesto gdje se uređuje.

## Delivery lanac

```
Klijent plaća
  → Onboarding call ──────────────► [1] onboarding-transkript   ❌ nije napravljen
  → Kreiranje Drive foldera            │
                                       ▼
                                  [2] izrada-upitnika            ✅
                                       ▼
                                  [3] client-internal-doc        ✅
                                       ▼
  → Call #2: strukturiranje      [4] brand-book                  ✅
    ponude                           │        │
                                     │        └──► [5] ad-creation      ✅
                                     ▼
                                [6] offer-creation               ✅ (ovaj commit)
                                     ▼
                                [7] sales-page → GHL             ❌ sljedeće
```

## Status

| Skill | Status | Napomena |
|---|---|---|
| `onboarding-transkript` | ❌ | Ulaz u lanac je zasad ručan — `izrada-upitnika` odbija raditi bez transkripta |
| `izrada-upitnika` | ✅ | 4 reference fajla, potpun |
| `client-internal-doc` | ✅ | |
| `brand-book` | ✅ | ⚠️ nema web tokena (H1/H2/body skala, buttoni, spacing) — blokira `sales-page` |
| `ad-creation` | ✅ | Trošit će `offer-creation` handoff polja umjesto nagađanja |
| `offer-creation` | ✅ | |
| `sales-page` | ❌ | Sljedeći veliki blok. Output: copy + struktura sekcija za GoHighLevel |
| `copywriting/references/` | ❌ | copy-fundamentals, landing-pages, hooks — dijeljeno, `sales-page` i `ad-creation` |

## Pravilo koje vrijedi za sve skillove

Skill nikad ne izmišlja podatak koji mora doći od klijenta (cijena, garancija, brojevi,
rezultati, testimonijali). Ako podatak nedostaje — označi ga kao NEDOSTAJE i navedi u
završnom sažetku. Skill koji popuni prazninu razumno-zvučećom izmišljotinom tiho laže i
kvari sve nizvodno.
