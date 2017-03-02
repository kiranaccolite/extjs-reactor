const addTreeLevel = (data, fieldName, fieldsToCopy, notBlank) => {
    const tree = [];
    let currentValue,
        parentItem;

    data.forEach(item => {
        if (item[fieldName] != currentValue) {
            currentValue = item[fieldName];
            parentItem = {};
            parentItem[fieldName] = currentValue;
            parentItem.text = currentValue;
            fieldsToCopy.forEach(field => {
                parentItem[field] = item[field];
            });
            parentItem.children = [];
            tree.push(Ext.apply(parentItem));
        }
        if (item[notBlank]) {
            if (Ext.isEmpty(item.children)) {
                item.leaf = true;
            }
            if (Ext.isEmpty(item.text)) {
                item.text = item[notBlank];
            }
            tree[tree.length - 1].children.push(item);
        }
    });

    return tree;
}

export default function createData() {
    let data = addTreeLevel(salaryData, 'industry_type', ['salary', 'state'], 'industry');
    return addTreeLevel(data, 'state', [], 'state');
}

const salaryData = [
  {
    "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 34987.4879,
    "count": 207,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 48404.3478,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 43254.6939,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 31701.6667,
    "count": 48,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 24882.8767,
    "count": 73,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Construction",
    "industry": "",
    "salary": 38732.1838,
    "count": 1099,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 38732.1838,
    "count": 1099,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35730.2711,
    "count": 2176,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 60666.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 40484.273,
    "count": 674,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33912.9718,
    "count": 1420,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 20839.5522,
    "count": 67,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 13851.3489,
    "count": 1757,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 28304.2857,
    "count": 49,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 19961.5385,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 18705.5556,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 16921.92,
    "count": 125,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 13711.0112,
    "count": 178,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "",
    "salary": 51469.3998,
    "count": 1093,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 105107.5,
    "count": 64,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 57591.5254,
    "count": 295,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 50660.423,
    "count": 331,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 47515.0538,
    "count": 93,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 40852.381,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 44540.3387,
    "count": 2421,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 59330.3636,
    "count": 330,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 52009.0909,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 49539.0863,
    "count": 197,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 48085.2046,
    "count": 1051,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 47529.0741,
    "count": 108,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "",
    "salary": 47974.9143,
    "count": 350,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 62621.9048,
    "count": 105,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 61459.2593,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 50385.1852,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 39078.5714,
    "count": 70,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 33434.6939,
    "count": 49,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 44327.5767,
    "count": 3024,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 128827.2727,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 86967.1642,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 69243.7634,
    "count": 93,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "ALUMINUM PRODUCTION AND PROCESSING",
    "salary": 69033.3333,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 66999.9074,
    "count": 108,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Military",
    "industry": "",
    "salary": 55640.1575,
    "count": 127,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 60465.1515,
    "count": 66,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 48264.2857,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Mining",
    "industry": "",
    "salary": 80715.0382,
    "count": 131,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 92491.0811,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 76996,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 76308.4746,
    "count": 59,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 46656.0103,
    "count": 1751,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 76948.2253,
    "count": 293,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 70989.2857,
    "count": 56,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 70308.9689,
    "count": 161,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 65890.4762,
    "count": 168,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 60934.8515,
    "count": 101,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 49296.2984,
    "count": 1213,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 68552.9259,
    "count": 270,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 58804.7107,
    "count": 121,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 50001.5217,
    "count": 46,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 46042.8571,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 44575.4878,
    "count": 164,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 24735.3637,
    "count": 2543,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 46203.0435,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 44638.6702,
    "count": 188,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 44364.1509,
    "count": 53,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 43200,
    "count": 164,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 34904,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "",
    "salary": 25334.265,
    "count": 898,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 41017.6471,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 38356.25,
    "count": 48,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 34673.6196,
    "count": 163,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 29792.3077,
    "count": 65,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 28505.7143,
    "count": 35,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18312.6844,
    "count": 339,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 31750.5556,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 24892.0175,
    "count": 114,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 21430.7692,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 12990.7216,
    "count": 194,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44570.1857,
    "count": 754,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 63397.6744,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 53000,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 50069.9187,
    "count": 123,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 48088.0952,
    "count": 42,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 47542.4528,
    "count": 106,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 62696.7655,
    "count": 371,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 73636.1702,
    "count": 235,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 60900,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 53132,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 37983.5821,
    "count": 67,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 37592,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 48605.1546,
    "count": 485,
    "rank": 0
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 86204,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 73722.5806,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 59800,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 59413.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Alabama",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 51470.5882,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33114.0351,
    "count": 114,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 59872.7273,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 31464.7059,
    "count": 85,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Construction",
    "industry": "",
    "salary": 44394.8921,
    "count": 278,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 44394.8921,
    "count": 278,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 36631.1869,
    "count": 337,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 37909.0909,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 36783.5395,
    "count": 291,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18583.4496,
    "count": 258,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 43260,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 29658.3333,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 21354.7368,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 19660,
    "count": 20,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 15940,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Finance",
    "industry": "",
    "salary": 42539.1089,
    "count": 101,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 46668.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 43511.8421,
    "count": 38,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 30150,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 52589.8667,
    "count": 300,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 117227.7778,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 79550,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 53718.6916,
    "count": 107,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48902.0896,
    "count": 67,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 44449.2683,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Information",
    "industry": "",
    "salary": 47334.6,
    "count": 50,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 57764.2857,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 37639.939,
    "count": 164,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Manufacturing",
    "industry": "SEAFOOD AND OTHER MISCELLANEOUS FOODS, N.E.C.",
    "salary": 25584.8624,
    "count": 109,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Military",
    "industry": "",
    "salary": 41669.4656,
    "count": 131,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 57584.6154,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 43114.2857,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 37367.1429,
    "count": 70,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Mining",
    "industry": "",
    "salary": 89113.4921,
    "count": 126,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 159937.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 85324.7059,
    "count": 85,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 60089.4737,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 54947.085,
    "count": 247,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 75266.1538,
    "count": 65,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 64396.7742,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 58288.2353,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "ACCOUNTING, TAX PREPARATION, BOOKKEEPING, AND PAYROLL SERVICES",
    "salary": 58171.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Professional Services",
    "industry": "OTHER ADMINISTRATIVE AND OTHER SUPPORT SERVICES",
    "salary": 46190.9091,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 39678.9032,
    "count": 465,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 71797.2973,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 56860,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 51603.125,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 47084.9515,
    "count": 103,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 43473.75,
    "count": 40,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 27423.2941,
    "count": 340,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 45366.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 43869.2308,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 35364.7059,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 33022.2222,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Retail Trade",
    "industry": "CLOTHING STORES",
    "salary": 31656.25,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "",
    "salary": 32898.0328,
    "count": 122,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 65872.7273,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 42938.4615,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 33448.5714,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 28850.8333,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Services",
    "industry": "BEAUTY SALONS",
    "salary": 18054.5455,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 23808.022,
    "count": 91,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 25205.8929,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18726.9231,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 47139.1327,
    "count": 196,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 70098,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 48425,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 45690.7692,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 42707.6,
    "count": 50,
    "rank": 4
  },
  {
    "state": "Alaska",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 33957.1429,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Alaska",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 47592.0635,
    "count": 63,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 53644.1176,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Alaska",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 31968.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Alaska",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 43181.5789,
    "count": 38,
    "rank": 0
  },
  {
    "state": "Alaska",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 38743.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24817.395,
    "count": 357,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 34433,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 32197.8378,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 30316.0294,
    "count": 68,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 21149.7345,
    "count": 226,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Construction",
    "industry": "",
    "salary": 37878.9845,
    "count": 1743,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 37878.9845,
    "count": 1743,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34938.6222,
    "count": 3150,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 45700,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42645.1202,
    "count": 957,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 39293.9865,
    "count": 148,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 30827.9198,
    "count": 2019,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19620.2235,
    "count": 3105,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 36654.7482,
    "count": 139,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 26150.6,
    "count": 100,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "BOWLING CENTERS",
    "salary": 25205.2632,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 24169.214,
    "count": 458,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 22204.386,
    "count": 570,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56885.9082,
    "count": 2136,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 82680.1843,
    "count": 217,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 68741.2639,
    "count": 269,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 59208.8785,
    "count": 428,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 57061.0227,
    "count": 528,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 56003.5714,
    "count": 28,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 52786.0108,
    "count": 3136,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 72709.2464,
    "count": 345,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 58556.8041,
    "count": 194,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 57899.4483,
    "count": 1287,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 56177.6821,
    "count": 302,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Health Care",
    "industry": "OFFICES OF CHIROPRACTORS",
    "salary": 53420.6897,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "",
    "salary": 48272.0455,
    "count": 528,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 75806.4516,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 63262.8571,
    "count": 105,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 58826.7606,
    "count": 71,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 56597.8723,
    "count": 94,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 40612.5,
    "count": 40,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 61973.9899,
    "count": 2183,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 92168.2927,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 85363.0252,
    "count": 357,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 84208.8561,
    "count": 271,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 82021.2963,
    "count": 108,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 77356.6038,
    "count": 53,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Military",
    "industry": "",
    "salary": 36550,
    "count": 200,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 42679.7297,
    "count": 74,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 34850.7937,
    "count": 63,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 28800,
    "count": 48,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Mining",
    "industry": "",
    "salary": 75878.673,
    "count": 211,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 146803.7037,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 68230.7692,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 66514.8649,
    "count": 148,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 55526.3158,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 48759.7296,
    "count": 3218,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 78135.4244,
    "count": 271,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 75712.3858,
    "count": 394,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 73672.0364,
    "count": 275,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 71413.2,
    "count": 250,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 64620,
    "count": 20,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 51063.6523,
    "count": 1714,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 62557.4074,
    "count": 54,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 59933.2569,
    "count": 218,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 55389.4737,
    "count": 57,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 52449.1248,
    "count": 777,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 49442.8696,
    "count": 115,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28731.0288,
    "count": 3402,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 51207.2,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS RETAIL STORES",
    "salary": 49777.4638,
    "count": 138,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 47046.6667,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 43619.8454,
    "count": 194,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 43023.9423,
    "count": 104,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "",
    "salary": 26845.2542,
    "count": 1121,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 49448.2759,
    "count": 29,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 42415.625,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 34603.5751,
    "count": 193,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 34288.0153,
    "count": 131,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 30631.7073,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 22354.4106,
    "count": 604,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 26727.5,
    "count": 40,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 24921.5522,
    "count": 335,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17949.9698,
    "count": 199,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17073.3333,
    "count": 30,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 43890.4135,
    "count": 1064,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 70825,
    "count": 44,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 59628.3505,
    "count": 194,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 48872.2951,
    "count": 122,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 43969.2857,
    "count": 126,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 39776.4474,
    "count": 152,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 75350.4732,
    "count": 317,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 99646.1538,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 99133.3333,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 81263.1579,
    "count": 190,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "NOT SPECIFIED UTILITIES",
    "salary": 62454.5455,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 57559.7222,
    "count": 72,
    "rank": 5
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 54403.7771,
    "count": 691,
    "rank": 0
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 85271.7391,
    "count": 46,
    "rank": 1
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 70000,
    "count": 63,
    "rank": 2
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 67272.7273,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 60028.8462,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Arizona",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 58634.8485,
    "count": 66,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 31910.2759,
    "count": 290,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 53352.6316,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 35588,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 33481.8919,
    "count": 74,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 27660.1212,
    "count": 165,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Construction",
    "industry": "",
    "salary": 36041.7172,
    "count": 693,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 36041.7172,
    "count": 693,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 31696.8028,
    "count": 1420,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 32482.3354,
    "count": 972,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 30152.5187,
    "count": 401,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 26038.2927,
    "count": 41,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 13421.743,
    "count": 1004,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 32853.8462,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 25680.9524,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 14990.1266,
    "count": 79,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 13119.4792,
    "count": 96,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 12417.1721,
    "count": 732,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "",
    "salary": 49069.6088,
    "count": 588,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 109115.1515,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 60114.7239,
    "count": 163,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 47464.1026,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 43526.8142,
    "count": 113,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 37472.7273,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 46055.1961,
    "count": 1453,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 85393.913,
    "count": 115,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 79054.5455,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 56620.5747,
    "count": 87,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 52034.6154,
    "count": 78,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 51684.7414,
    "count": 580,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "",
    "salary": 46526.7633,
    "count": 207,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 69608.9286,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 67733,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 67500,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 43662.1429,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 33744.4444,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 38908.9913,
    "count": 1844,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "BEVERAGE",
    "salary": 74536.3636,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 63107.6923,
    "count": 65,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 60972.2222,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 59846.6667,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 58661.5385,
    "count": 26,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Military",
    "industry": "",
    "salary": 48257.7778,
    "count": 45,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 49721.6216,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Mining",
    "industry": "",
    "salary": 54756.7308,
    "count": 104,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 73176.9231,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 56482.1918,
    "count": 73,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 31013.3333,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 36840.4614,
    "count": 867,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 74168.8372,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 64600,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "OTHER ADMINISTRATIVE AND OTHER SUPPORT SERVICES",
    "salary": 59376.9231,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 56805.8442,
    "count": 77,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 56745.8333,
    "count": 72,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 38754.4511,
    "count": 603,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 48250,
    "count": 46,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 46905.0847,
    "count": 59,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 41406.1864,
    "count": 118,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 38144.7027,
    "count": 37,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 38090.4149,
    "count": 241,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 31556.9798,
    "count": 1735,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 48491.4286,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 46917.8571,
    "count": 84,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 43043.6128,
    "count": 501,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 40116.8103,
    "count": 116,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 35450,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "",
    "salary": 24003.3012,
    "count": 518,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 52025,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 31286.9565,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 30045.4545,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 24210.973,
    "count": 185,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 23201.1765,
    "count": 102,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 19204.6557,
    "count": 305,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 22792.8682,
    "count": 129,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21304.1667,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 16136.3636,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 15803.8298,
    "count": 141,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45123.868,
    "count": 500,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 61609.3023,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 55538.0952,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 45350,
    "count": 46,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 45045.8131,
    "count": 214,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 41506.092,
    "count": 87,
    "rank": 5
  },
  {
    "state": "Arkansas",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 58322.6316,
    "count": 190,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 77345.6522,
    "count": 92,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 48291.6667,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 40073.3333,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 35060.3774,
    "count": 53,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46886.2633,
    "count": 281,
    "rank": 0
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 67218.1818,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 66800,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 57405.2632,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 49783.0435,
    "count": 46,
    "rank": 4
  },
  {
    "state": "Arkansas",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 45231.25,
    "count": 16,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24541.9792,
    "count": 3746,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 46523.3766,
    "count": 77,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 39362.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 34598.2222,
    "count": 45,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 30175.4036,
    "count": 446,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 23509.8641,
    "count": 2694,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Construction",
    "industry": "",
    "salary": 44554.4584,
    "count": 8394,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 44554.4584,
    "count": 8394,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 42231.6072,
    "count": 16600,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 47619.8411,
    "count": 5034,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 41603.3392,
    "count": 10299,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 30958.2927,
    "count": 164,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 25182.6383,
    "count": 1103,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 23341.6698,
    "count": 16759,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 51537.1958,
    "count": 1047,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 31846.5709,
    "count": 522,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 30525.0114,
    "count": 1752,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 26895.3749,
    "count": 2854,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 21386.7857,
    "count": 196,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "",
    "salary": 73276.0306,
    "count": 10072,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 130645.8463,
    "count": 1223,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 85712.837,
    "count": 920,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 71516.7299,
    "count": 1951,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "VIDEO TAPE AND DISK RENTAL",
    "salary": 69871.4286,
    "count": 21,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 68910.7506,
    "count": 2438,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 60183.7018,
    "count": 16789,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 86533.692,
    "count": 1552,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 71615.8981,
    "count": 7338,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 62515.522,
    "count": 1456,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 54907.7778,
    "count": 243,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 53428.0352,
    "count": 1761,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "",
    "salary": 78706.0654,
    "count": 5171,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 140209.4077,
    "count": 287,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 136736.7521,
    "count": 117,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 128537.8049,
    "count": 328,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 92499.3624,
    "count": 527,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 82259.2701,
    "count": 137,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 64810.5368,
    "count": 17531,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 121919.3333,
    "count": 675,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 107108.9552,
    "count": 402,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 106774.0854,
    "count": 656,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 102375.975,
    "count": 1923,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 96393,
    "count": 200,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "",
    "salary": 39559.3254,
    "count": 1512,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 64491.3043,
    "count": 46,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 52739.6226,
    "count": 53,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 50686.747,
    "count": 166,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 41277.551,
    "count": 98,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 40927.4571,
    "count": 641,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Mining",
    "industry": "",
    "salary": 76050.5491,
    "count": 346,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 121925.3731,
    "count": 67,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 66900,
    "count": 46,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 65914.3694,
    "count": 222,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 66655.3162,
    "count": 20063,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 105384.7337,
    "count": 3004,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 95840.1517,
    "count": 2109,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 90254.7826,
    "count": 115,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 89793.5089,
    "count": 1120,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 84342.4354,
    "count": 1704,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 62882.3488,
    "count": 8080,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 75104.3125,
    "count": 3130,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 69294.4251,
    "count": 287,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 65049.2909,
    "count": 550,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 62313.5237,
    "count": 928,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 58890.6553,
    "count": 412,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 32174.641,
    "count": 18333,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC AUCTIONS",
    "salary": 134702.0408,
    "count": 49,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 73158.0682,
    "count": 264,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 59909.4479,
    "count": 978,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 48989,
    "count": 80,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 47979.7171,
    "count": 1131,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "",
    "salary": 29112.7253,
    "count": 7365,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 61056.7241,
    "count": 116,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 53297.0202,
    "count": 198,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 40477.752,
    "count": 863,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 38686.8532,
    "count": 218,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 38297.1296,
    "count": 108,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 25682.2187,
    "count": 4509,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 32235.1266,
    "count": 158,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 28347.6552,
    "count": 2738,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21837.0233,
    "count": 215,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 20312.6853,
    "count": 1398,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 43716.2508,
    "count": 6100,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 81243.4783,
    "count": 23,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 64774.1935,
    "count": 93,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 61435.461,
    "count": 141,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 56564.5291,
    "count": 499,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 50274.7397,
    "count": 749,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 82374.3197,
    "count": 1470,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 92953.2075,
    "count": 477,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 92437.6875,
    "count": 320,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 72124.4898,
    "count": 98,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 72017.561,
    "count": 123,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 69183.1754,
    "count": 422,
    "rank": 5
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 52450.6793,
    "count": 5285,
    "rank": 0
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 78099.1266,
    "count": 458,
    "rank": 1
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 77634.2857,
    "count": 98,
    "rank": 2
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 73791.6667,
    "count": 72,
    "rank": 3
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 72936.2324,
    "count": 284,
    "rank": 4
  },
  {
    "state": "California",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 70367.0391,
    "count": 358,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 30812.9091,
    "count": 341,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 50477.2727,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 31385.2393,
    "count": 163,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 28617.9688,
    "count": 128,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 25263.1579,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Construction",
    "industry": "",
    "salary": 44397.3636,
    "count": 1650,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 44397.3636,
    "count": 1650,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37074.8823,
    "count": 2718,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 71800,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 40032.1133,
    "count": 847,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 37966.6883,
    "count": 154,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35108.6977,
    "count": 1697,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 20405.0224,
    "count": 2905,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 40125.188,
    "count": 133,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 30716.6667,
    "count": 102,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 26355.9807,
    "count": 311,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 21452.2535,
    "count": 568,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 17975.6098,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "",
    "salary": 63628.838,
    "count": 1790,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 97791.2857,
    "count": 280,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 70369.1244,
    "count": 217,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 60608.3206,
    "count": 393,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 59323.5294,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 56198.411,
    "count": 472,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 52546.4536,
    "count": 2566,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 79631.6803,
    "count": 244,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 65700.6211,
    "count": 161,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 63506.7005,
    "count": 197,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 62865.2174,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 57502.9471,
    "count": 1001,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "",
    "salary": 66870.0902,
    "count": 776,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 104062.5,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 88128.5714,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 80050.8475,
    "count": 118,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 79873.125,
    "count": 160,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 74934.3617,
    "count": 188,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 64670.2997,
    "count": 1902,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 106416.6667,
    "count": 66,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 100540.4762,
    "count": 126,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 96536.3636,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 94278.2609,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Manufacturing",
    "industry": "GLASS AND GLASS PRODUCTS",
    "salary": 83266.6667,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Military",
    "industry": "",
    "salary": 37770.7447,
    "count": 376,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 63650,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 60350,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 39764.3192,
    "count": 213,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 30073.2824,
    "count": 131,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "",
    "salary": 95963.8404,
    "count": 401,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 126733.3333,
    "count": 75,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 112706.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 97493.3333,
    "count": 30,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 89149.3878,
    "count": 245,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 69986.1111,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 61712.8538,
    "count": 3469,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 100396,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 89992.2813,
    "count": 583,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 87537.2581,
    "count": 248,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 80550.3704,
    "count": 135,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 77711.1111,
    "count": 405,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 56596.444,
    "count": 1392,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 68523.2653,
    "count": 98,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 65746,
    "count": 120,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 61317.1123,
    "count": 187,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 57062.4144,
    "count": 526,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 56346.875,
    "count": 64,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 30953.3628,
    "count": 3054,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 66303.4884,
    "count": 129,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 54794.9738,
    "count": 191,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 54640.625,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 46473.2283,
    "count": 127,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 45008.3333,
    "count": 24,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "",
    "salary": 30814.6913,
    "count": 1137,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 54727.2727,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 52054.717,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 42343.2948,
    "count": 173,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 37675.7738,
    "count": 168,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 33165.8537,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 26262.4696,
    "count": 494,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 33959.5851,
    "count": 241,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 28276.1905,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 28037.5,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17347.2222,
    "count": 216,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44594.2903,
    "count": 937,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 86304.5455,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 63428.2051,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 62420.6024,
    "count": 166,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 43400.4032,
    "count": 124,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 43371.7391,
    "count": 115,
    "rank": 5
  },
  {
    "state": "Colorado",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 66520.155,
    "count": 258,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 95762.1622,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 69924.5614,
    "count": 114,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 51124.2857,
    "count": 70,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 46559.0909,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 61273.8819,
    "count": 711,
    "rank": 0
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 97970.2703,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "PAPER AND PAPER PRODUCTS MERCHANT WHOLESALERS",
    "salary": 85276.1905,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 82589.4737,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 79640.9091,
    "count": 44,
    "rank": 4
  },
  {
    "state": "Colorado",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 72757.5758,
    "count": 66,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 20433.8356,
    "count": 73,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 20938.6364,
    "count": 44,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 17741.4286,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Construction",
    "industry": "",
    "salary": 50673.3609,
    "count": 845,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 50673.3609,
    "count": 845,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 46146.7563,
    "count": 2343,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 48916.7275,
    "count": 1424,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 43167.3333,
    "count": 810,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 34096.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 31852.8866,
    "count": 97,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 21226.824,
    "count": 1716,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 59019.3151,
    "count": 73,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 35789.6226,
    "count": 106,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 28015.6923,
    "count": 65,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 22925.5479,
    "count": 438,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 21415.3846,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "",
    "salary": 120998.5312,
    "count": 1668,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 209683.5443,
    "count": 316,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 186329.1139,
    "count": 79,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 117584.7909,
    "count": 263,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 102826.7983,
    "count": 709,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 77153.8462,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 62578.2523,
    "count": 2283,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 116854.4061,
    "count": 261,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 71819.2148,
    "count": 917,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 58649.635,
    "count": 137,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 50535.9375,
    "count": 128,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 48851.7241,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "",
    "salary": 79290.1405,
    "count": 427,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 171000,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 104681.1765,
    "count": 85,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 99314.9254,
    "count": 67,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 85329.6825,
    "count": 63,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 72506.6667,
    "count": 30,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 73526.1601,
    "count": 2086,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "BEVERAGE",
    "salary": 140988.8889,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 137812.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "ENGINE, TURBINE, AND POWER TRANSMISSION EQUIPMENT",
    "salary": 122958.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 117203.3898,
    "count": 118,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Manufacturing",
    "industry": "SOAP, CLEANING COMPOUND, AND COSMETICS",
    "salary": 110075.6757,
    "count": 37,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Military",
    "industry": "",
    "salary": 34968.6869,
    "count": 99,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 33778.2609,
    "count": 46,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 26754.5455,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 78362.6521,
    "count": 2064,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 134644.1176,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 132746,
    "count": 50,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 124903.0043,
    "count": 233,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 120652.5556,
    "count": 90,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 113369.5247,
    "count": 223,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 63238.4584,
    "count": 746,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 74802.381,
    "count": 42,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 73003.0303,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 67467.8419,
    "count": 329,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 64800.5102,
    "count": 98,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 61916,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 33378.335,
    "count": 2060,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 164933.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 64534.7826,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "OTHER DIRECT SELLING ESTABLISHMENTS",
    "salary": 60308.2609,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS RETAIL STORES",
    "salary": 57413.0233,
    "count": 43,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 54229.5082,
    "count": 61,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "",
    "salary": 33388.8195,
    "count": 737,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 56490.9091,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 47321.6216,
    "count": 148,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46938.8889,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40652.6316,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 37807.1429,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 24031.9792,
    "count": 480,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 45541.1765,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26436.3256,
    "count": 215,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 20617.6522,
    "count": 230,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 18626.6667,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 49288.4144,
    "count": 473,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 82020,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 73973.0769,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 66066.6667,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 54822.7885,
    "count": 104,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 48753.8806,
    "count": 67,
    "rank": 5
  },
  {
    "state": "Connecticut",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 94153.7931,
    "count": 145,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 103583.3333,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 98490.7216,
    "count": 97,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 72636.3636,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 78558.5268,
    "count": 448,
    "rank": 0
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "APPAREL, PIECE GOODS, AND NOTIONS MERCHANT WHOLESALERS",
    "salary": 142072.7273,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 140093.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 109425.641,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 86833.3333,
    "count": 39,
    "rank": 4
  },
  {
    "state": "Connecticut",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 79134.7619,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 41820,
    "count": 30,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 43636.3636,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 39506.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Construction",
    "industry": "",
    "salary": 41455.32,
    "count": 250,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 41455.32,
    "count": 250,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 41150.4742,
    "count": 485,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 44832.6667,
    "count": 165,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 39742.451,
    "count": 306,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 26100,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19350.939,
    "count": 426,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 27727.2727,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 27593.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 24093.8272,
    "count": 81,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 22975,
    "count": 32,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 16962.5455,
    "count": 275,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "",
    "salary": 60268.6842,
    "count": 380,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 83350,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 72510,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 60768.0851,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 59000,
    "count": 182,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 46662.7119,
    "count": 59,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 58978.8912,
    "count": 478,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 78431.746,
    "count": 63,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 67268.8995,
    "count": 209,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 53284.8485,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 52432.5,
    "count": 40,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 50155.5556,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Information",
    "industry": "",
    "salary": 37378.4783,
    "count": 46,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 62380.7895,
    "count": 380,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 121666.6667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 87998.4375,
    "count": 64,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "PLASTICS PRODUCTS",
    "salary": 74142.8571,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 64025,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Manufacturing",
    "industry": "PRINTING AND RELATED SUPPORT ACTIVITIES",
    "salary": 47450,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Military",
    "industry": "",
    "salary": 44268.4211,
    "count": 19,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 40213.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 53015.9101,
    "count": 445,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 94484.5098,
    "count": 51,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 81765.5172,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 71256.7568,
    "count": 37,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 65104.7619,
    "count": 42,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 61518.4211,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 51051.3278,
    "count": 241,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 60887.8788,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 52606.8182,
    "count": 88,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 51427.5862,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 46588.8889,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 44624.1667,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29995.3509,
    "count": 570,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 73784.6154,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 65694.4186,
    "count": 43,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 43998.2353,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS RETAIL STORES",
    "salary": 35971.4286,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Retail Trade",
    "industry": "SPORTING GOODS, AND HOBBY AND TOY STORES",
    "salary": 32900,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "",
    "salary": 32451.6842,
    "count": 190,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 53595,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 37316,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 31960,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "BEAUTY SALONS",
    "salary": 25466.6667,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 16318.1818,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 27367.3881,
    "count": 134,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 38168.8525,
    "count": 61,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 15890.8065,
    "count": 62,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45337.5974,
    "count": 154,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "WAREHOUSING AND STORAGE",
    "salary": 65400,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 61000,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 60375,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 42715.7895,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Delaware",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 37637.1429,
    "count": 35,
    "rank": 5
  },
  {
    "state": "Delaware",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 78644.7368,
    "count": 38,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 86257.6923,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Delaware",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46287.5904,
    "count": 83,
    "rank": 0
  },
  {
    "state": "Delaware",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 41512.5,
    "count": 24,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Construction",
    "industry": "",
    "salary": 32106.6667,
    "count": 75,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 32106.6667,
    "count": 75,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 41087.3228,
    "count": 381,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 47551.4599,
    "count": 137,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 42715.9091,
    "count": 44,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 35941.2183,
    "count": 197,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 25812.0482,
    "count": 332,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 47680,
    "count": 40,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 43437.1429,
    "count": 35,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 40355.7692,
    "count": 26,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 19218.2258,
    "count": 186,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 11175.2941,
    "count": 34,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "",
    "salary": 86088.7845,
    "count": 181,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 146333.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 113066.6667,
    "count": 18,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 82985.7143,
    "count": 21,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 80026.0294,
    "count": 68,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 77365.9574,
    "count": 47,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 66978.5992,
    "count": 257,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 129480.9524,
    "count": 21,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 102636.3636,
    "count": 11,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 67743.75,
    "count": 16,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 67099.2188,
    "count": 128,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 52723.0769,
    "count": 26,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Information",
    "industry": "",
    "salary": 70332.8,
    "count": 125,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 125045.4545,
    "count": 22,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 58440,
    "count": 35,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 54450,
    "count": 14,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 37541.6667,
    "count": 12,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 73314.4231,
    "count": 52,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Military",
    "industry": "",
    "salary": 45106.8182,
    "count": 44,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 29654.1667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 97115.4176,
    "count": 862,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 179965.0581,
    "count": 172,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 104143.75,
    "count": 48,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 102207.4432,
    "count": 176,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "ACCOUNTING, TAX PREPARATION, BOOKKEEPING, AND PAYROLL SERVICES",
    "salary": 96143.75,
    "count": 16,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 93049.6471,
    "count": 85,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 85003.4818,
    "count": 606,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 95831.0345,
    "count": 29,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 95215.5556,
    "count": 180,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 87138.5965,
    "count": 57,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 85647.9452,
    "count": 73,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 85009.0909,
    "count": 44,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28897.7169,
    "count": 219,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Retail Trade",
    "industry": "CLOTHING STORES",
    "salary": 24902.3077,
    "count": 26,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Retail Trade",
    "industry": "GROCERY STORES",
    "salary": 19617.1014,
    "count": 69,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 16390.4762,
    "count": 21,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "",
    "salary": 59265.8449,
    "count": 361,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 81775,
    "count": 104,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 64008.9308,
    "count": 159,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 36146.1538,
    "count": 26,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "OTHER PERSONAL SERVICES",
    "salary": 25090.9091,
    "count": 11,
    "rank": 4
  },
  {
    "state": "District of Columbia",
    "industry_type": "Services",
    "industry": "PRIVATE HOUSEHOLDS",
    "salary": 15408,
    "count": 20,
    "rank": 5
  },
  {
    "state": "District of Columbia",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 43161.5672,
    "count": 134,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 59535.4167,
    "count": 72,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 37009.5238,
    "count": 21,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 15177.4194,
    "count": 31,
    "rank": 3
  },
  {
    "state": "District of Columbia",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 46028.3784,
    "count": 74,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 50837.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "District of Columbia",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 43058.3333,
    "count": 12,
    "rank": 2
  },
  {
    "state": "District of Columbia",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 63416.6667,
    "count": 12,
    "rank": 0
  },
  {
    "state": "District of Columbia",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 45304.5,
    "count": 20,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 27720.5584,
    "count": 788,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 40421.7391,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 38041.3793,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 33300,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 32840.9278,
    "count": 97,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 26944.4711,
    "count": 501,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Construction",
    "industry": "",
    "salary": 38234.5903,
    "count": 5150,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 38234.5903,
    "count": 5150,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 36841.1052,
    "count": 7854,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42197.6884,
    "count": 2176,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 35819.7368,
    "count": 76,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 34919.636,
    "count": 5193,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 32928.8509,
    "count": 409,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 23298.1766,
    "count": 10100,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 34114.3117,
    "count": 494,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 29515.0835,
    "count": 1377,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 27848.1286,
    "count": 1913,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 27185.087,
    "count": 230,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Entertainment",
    "industry": "BOWLING CENTERS",
    "salary": 26659.375,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "",
    "salary": 57574.054,
    "count": 6634,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 99319.3548,
    "count": 589,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 71177.6119,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 66289.1618,
    "count": 513,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 59641.2577,
    "count": 1808,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 57784.0583,
    "count": 1269,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 52661.6271,
    "count": 9858,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 74363.5837,
    "count": 1451,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 58426.3948,
    "count": 466,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 56646.907,
    "count": 3870,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 51893.7412,
    "count": 850,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 51239.6053,
    "count": 760,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "",
    "salary": 54757.4559,
    "count": 1816,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 79679.1667,
    "count": 72,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 79172.7273,
    "count": 44,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 71300.2521,
    "count": 238,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 66138.8325,
    "count": 394,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 52531.2651,
    "count": 166,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 53102.3218,
    "count": 4686,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "ENGINE, TURBINE, AND POWER TRANSMISSION EQUIPMENT",
    "salary": 85555.8824,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 84134.555,
    "count": 191,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 77902.7778,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 77074.8413,
    "count": 126,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 75362.2517,
    "count": 151,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "",
    "salary": 47439.5161,
    "count": 620,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 54015.122,
    "count": 205,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 53312.5,
    "count": 80,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 47244.6809,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 47094.2857,
    "count": 35,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 40329.798,
    "count": 198,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Mining",
    "industry": "",
    "salary": 75430.4878,
    "count": 82,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 93948,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 60013.6364,
    "count": 44,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 51839.6618,
    "count": 10543,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 80071.8953,
    "count": 1261,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 76296.5776,
    "count": 1011,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 75510.071,
    "count": 845,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 72652.0548,
    "count": 73,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 69159.1067,
    "count": 862,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 50402.8237,
    "count": 4310,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 60963.0741,
    "count": 553,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 55009.1736,
    "count": 242,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 51414.7541,
    "count": 122,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 50572.4316,
    "count": 2011,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 48126.2199,
    "count": 664,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28276.5345,
    "count": 11274,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 46930.4348,
    "count": 69,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 46754.5649,
    "count": 793,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 45368.1481,
    "count": 135,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 42527.4588,
    "count": 425,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 40588,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "",
    "salary": 27805.6755,
    "count": 3975,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 64200,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 52299.717,
    "count": 106,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 44672.7273,
    "count": 77,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40559.375,
    "count": 160,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 39386.625,
    "count": 400,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 22991.4386,
    "count": 1418,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 30391.6667,
    "count": 60,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 30244.0866,
    "count": 531,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 25123.2143,
    "count": 56,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17265.6939,
    "count": 771,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45895.9983,
    "count": 3480,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 65965.5971,
    "count": 561,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 62778.3133,
    "count": 83,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 60681.1765,
    "count": 153,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 49190.9091,
    "count": 429,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 46400.2736,
    "count": 658,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 62942.9322,
    "count": 723,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 73058.5132,
    "count": 417,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 68900,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 48368.4211,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 47377.0732,
    "count": 164,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Utilities",
    "industry": "NOT SPECIFIED UTILITIES",
    "salary": 46425,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 54841.7104,
    "count": 2514,
    "rank": 0
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 76895,
    "count": 40,
    "rank": 1
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "FARM PRODUCT RAW MATERIAL MERCHANT WHOLESALERS",
    "salary": 71590.9091,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 70124.6328,
    "count": 177,
    "rank": 3
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 69500.3759,
    "count": 266,
    "rank": 4
  },
  {
    "state": "Florida",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 64519.2414,
    "count": 145,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33926.614,
    "count": 443,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 40716.7442,
    "count": 86,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 33231.875,
    "count": 64,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 33039.1304,
    "count": 46,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 31117.7922,
    "count": 231,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Construction",
    "industry": "",
    "salary": 37538.5988,
    "count": 2298,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 37538.5988,
    "count": 2298,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37396.7209,
    "count": 4733,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 42803.8462,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42555.2808,
    "count": 1371,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35352.3923,
    "count": 3156,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 33168.5556,
    "count": 180,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18239.9453,
    "count": 4022,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 39430.5696,
    "count": 158,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 29124.359,
    "count": 117,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 27451.8351,
    "count": 376,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 20440.287,
    "count": 453,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 16466.2791,
    "count": 43,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "",
    "salary": 65181.2727,
    "count": 2805,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 113754.5455,
    "count": 286,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 68910.6338,
    "count": 284,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 68626.9231,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 66967.3147,
    "count": 823,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 60371.4234,
    "count": 555,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 50672.0157,
    "count": 4336,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 80623.3073,
    "count": 641,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 55746.0251,
    "count": 239,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 51987.4251,
    "count": 1903,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 48076.9231,
    "count": 39,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 46461.1726,
    "count": 307,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "",
    "salary": 66190.9347,
    "count": 1102,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 117134.2857,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 83866.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 80009.434,
    "count": 53,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 77674.1401,
    "count": 314,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 76902.3529,
    "count": 170,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 49602.1795,
    "count": 4781,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 97624.0741,
    "count": 54,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 90395.1613,
    "count": 62,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 89732.7879,
    "count": 165,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 83031.0345,
    "count": 58,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Manufacturing",
    "industry": "BEVERAGE",
    "salary": 81565.2632,
    "count": 95,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "",
    "salary": 38463.285,
    "count": 621,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 45057.8947,
    "count": 38,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 44376.7442,
    "count": 43,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 39477.381,
    "count": 84,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 37982.8087,
    "count": 413,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 37271.4286,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Mining",
    "industry": "",
    "salary": 45356.9355,
    "count": 62,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 44047.551,
    "count": 49,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 60290.3876,
    "count": 4773,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 98185.3659,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 95263.6018,
    "count": 447,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 91171.0148,
    "count": 542,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 84818.685,
    "count": 692,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 75184.2391,
    "count": 368,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 46981.4543,
    "count": 2496,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 60426.4759,
    "count": 332,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 54592.9577,
    "count": 426,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 53665.4321,
    "count": 81,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 52900,
    "count": 162,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 51615.0476,
    "count": 105,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29359.6054,
    "count": 5220,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 62062.3636,
    "count": 165,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 49183.8889,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 47446.1538,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 43350.9091,
    "count": 363,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 42557.6923,
    "count": 26,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "",
    "salary": 29249.1864,
    "count": 1942,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 63398.2692,
    "count": 52,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40928.8235,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40100.7813,
    "count": 64,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 38856.1084,
    "count": 203,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 36940.678,
    "count": 59,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20771.2895,
    "count": 760,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 29972.439,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 28987.8968,
    "count": 252,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 27544.8276,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 14734.1553,
    "count": 438,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 47491.0317,
    "count": 1987,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 67830.7368,
    "count": 380,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 62265.5556,
    "count": 90,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 50218.7793,
    "count": 213,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 47474.5763,
    "count": 236,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 45128.5784,
    "count": 204,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 59343.3772,
    "count": 456,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 85500,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 73064.2857,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 65521.5548,
    "count": 283,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "NOT SPECIFIED UTILITIES",
    "salary": 39445.4545,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 38605,
    "count": 40,
    "rank": 5
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 57494.1277,
    "count": 1284,
    "rank": 0
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 88721.6867,
    "count": 83,
    "rank": 1
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "PAPER AND PAPER PRODUCTS MERCHANT WHOLESALERS",
    "salary": 87841.6667,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 81865.2174,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 78391.0256,
    "count": 78,
    "rank": 4
  },
  {
    "state": "Georgia",
    "industry_type": "Wholesale Trade",
    "industry": "ALCOHOLIC BEVERAGES MERCHANT WHOLESALERS",
    "salary": 77363.6364,
    "count": 22,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 39574.3243,
    "count": 74,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 53541.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 36369.4915,
    "count": 59,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Construction",
    "industry": "",
    "salary": 47379.3705,
    "count": 413,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 47379.3705,
    "count": 413,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37194.9009,
    "count": 757,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42349.5735,
    "count": 211,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 36399.06,
    "count": 500,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 20222.093,
    "count": 43,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 27192.6733,
    "count": 1010,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 40038.8636,
    "count": 308,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 33138.5714,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 26134.3023,
    "count": 86,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 23530.7692,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 20271.9885,
    "count": 523,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56801.5509,
    "count": 432,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 84500,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 62771.4286,
    "count": 77,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "OTHER CONSUMER GOODS RENTAL",
    "salary": 59346.1538,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 57635.7143,
    "count": 98,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 57012.0769,
    "count": 130,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 54496.4198,
    "count": 648,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 78247.0149,
    "count": 67,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 60940.2985,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 56999.3377,
    "count": 302,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 48855.3571,
    "count": 56,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 41354,
    "count": 50,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "",
    "salary": 57858.972,
    "count": 107,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 70790.4762,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 60552.069,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 51886.6667,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 44358.3333,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 39035.7143,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 52633.5897,
    "count": 195,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "SHIP AND BOAT BUILDING",
    "salary": 77428.2051,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "PRINTING AND RELATED SUPPORT ACTIVITIES",
    "salary": 59246.1538,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "BAKERIES AND TORTILLA, EXCEPT RETAIL BAKERIES",
    "salary": 20583.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "RETAIL BAKERIES",
    "salary": 15408.3333,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Manufacturing",
    "industry": "CUT AND SEW APPAREL",
    "salary": 12965.3846,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "",
    "salary": 46640.081,
    "count": 494,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 57386.0465,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 49232.2835,
    "count": 127,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 47040.2913,
    "count": 206,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 42426.8293,
    "count": 41,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 35125,
    "count": 68,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 49270.5405,
    "count": 592,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 79004.4186,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 74366.6667,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 73071.6981,
    "count": 53,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 64468.75,
    "count": 48,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 63985.4167,
    "count": 48,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 58281.3208,
    "count": 583,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 69304.3689,
    "count": 206,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 58331.9728,
    "count": 147,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 55305.5556,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 51357.2368,
    "count": 76,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 50171.4286,
    "count": 28,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 27756.9587,
    "count": 799,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 42818.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 40260.8696,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 36977.7778,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 35906.6667,
    "count": 30,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Retail Trade",
    "industry": "HARDWARE STORES",
    "salary": 35612.5,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "",
    "salary": 30799.5753,
    "count": 259,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 41715.5882,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 38946.875,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 34056.7568,
    "count": 37,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "BEAUTY SALONS",
    "salary": 20624.6429,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Services",
    "industry": "OTHER PERSONAL SERVICES",
    "salary": 19953.6364,
    "count": 33,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 27081.6667,
    "count": 138,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 37000,
    "count": 61,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17933.2759,
    "count": 58,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45700.4348,
    "count": 345,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 71140.9836,
    "count": 61,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 57368.4932,
    "count": 73,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 45373.0769,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 43416.6667,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Hawaii",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 40673.6842,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Hawaii",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 67011.6923,
    "count": 65,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 76256.4103,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 55500,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46447.6821,
    "count": 151,
    "rank": 0
  },
  {
    "state": "Hawaii",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS NONDURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 47560,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Hawaii",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 45006.5217,
    "count": 46,
    "rank": 2
  },
  {
    "state": "Hawaii",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 44585.7143,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 26713.0394,
    "count": 431,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 40948.7179,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 35953.3333,
    "count": 45,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 26728,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 23621.0769,
    "count": 130,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 23567.6289,
    "count": 194,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Construction",
    "industry": "",
    "salary": 35427.5714,
    "count": 490,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 35427.5714,
    "count": 490,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 30432.0292,
    "count": 754,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 37538.0184,
    "count": 217,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 28051.378,
    "count": 508,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 16880.7692,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 15069.9273,
    "count": 688,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 21115.8537,
    "count": 82,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 18057.5,
    "count": 116,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 17242.9167,
    "count": 24,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 15194.5161,
    "count": 31,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 14018.5714,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "",
    "salary": 44819.017,
    "count": 352,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 89628.5714,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 70317.8571,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 50413.4737,
    "count": 95,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 47818.9873,
    "count": 79,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 31200,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 39008.5164,
    "count": 701,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 58944.0678,
    "count": 59,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 49405.1282,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 47622.4638,
    "count": 276,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 39596.4865,
    "count": 74,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 37308.3333,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "",
    "salary": 34609.6,
    "count": 125,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 55745,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 49473.6842,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 39107.4074,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 25150,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Information",
    "industry": "LIBRARIES AND ARCHIVES",
    "salary": 18794.4444,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 40187.6101,
    "count": 749,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL CHEMICALS",
    "salary": 73537.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 64494.2529,
    "count": 87,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "ANIMAL FOOD, GRAIN AND OILSEED MILLING",
    "salary": 61720,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "MISCELLANEOUS FABRICATED METAL PRODUCTS",
    "salary": 60525,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 59718.75,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Military",
    "industry": "",
    "salary": 30069.4444,
    "count": 36,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 28629.6296,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Mining",
    "industry": "",
    "salary": 69729.8246,
    "count": 57,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 82325,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 68268.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 45636.3636,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 41767.6619,
    "count": 633,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 68608.2192,
    "count": 73,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 67092.3077,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 64120.9756,
    "count": 41,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "WASTE MANAGEMENT AND REMEDIATION SERVICES",
    "salary": 53939.3939,
    "count": 33,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 50770.9091,
    "count": 55,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 41519.9506,
    "count": 405,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 54857.5,
    "count": 40,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 46648.5417,
    "count": 48,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 46133.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 41129.5745,
    "count": 141,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 40332.8767,
    "count": 73,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 25633.8862,
    "count": 826,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 49701.7857,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 41268.75,
    "count": 48,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 34317.1429,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 33518.1818,
    "count": 33,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 29365.2174,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "",
    "salary": 23878.5971,
    "count": 278,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 41400,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 29730.566,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 28332.9091,
    "count": 55,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 22295.4839,
    "count": 31,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Services",
    "industry": "DRYCLEANING AND LAUNDRY SERVICES",
    "salary": 22229.4118,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 14636.8675,
    "count": 166,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 17367.1875,
    "count": 96,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 9839.5,
    "count": 60,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 38450.7527,
    "count": 279,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 67650,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 49882.3529,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 37259.3043,
    "count": 115,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 36476.087,
    "count": 46,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 34408.6957,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Idaho",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 57430.5085,
    "count": 59,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 76629.6296,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 36177.2727,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 45785.1064,
    "count": 188,
    "rank": 0
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "FARM SUPPLIES MERCHANT WHOLESALERS",
    "salary": 86858.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 65753.5714,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 39137.5,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 33853.5,
    "count": 40,
    "rank": 4
  },
  {
    "state": "Idaho",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 32011.4286,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33416.3553,
    "count": 653,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 35125.9442,
    "count": 466,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 32575,
    "count": 56,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 29669.1089,
    "count": 101,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 22563.6364,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 17730.7692,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Construction",
    "industry": "",
    "salary": 48240.5432,
    "count": 3185,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 48240.5432,
    "count": 3185,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 39385.9407,
    "count": 6910,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 40538.1128,
    "count": 2305,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 39530.7322,
    "count": 4261,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 37130.8511,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 28723.569,
    "count": 297,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18291.5432,
    "count": 5709,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 29777.9121,
    "count": 455,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 28449.5082,
    "count": 244,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 20801.7066,
    "count": 334,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 17375.7732,
    "count": 97,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 16686.0511,
    "count": 3563,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "",
    "salary": 76171.8424,
    "count": 4415,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 135849.2393,
    "count": 652,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 84171.5616,
    "count": 333,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 70840.625,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 67248.6417,
    "count": 1443,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 67105.1306,
    "count": 1072,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 49141.6899,
    "count": 7089,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 85965.5,
    "count": 620,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 55682.5393,
    "count": 3052,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 48670.4194,
    "count": 453,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48038.5818,
    "count": 550,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 47655.7143,
    "count": 84,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "",
    "salary": 55096.5684,
    "count": 1221,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 118713.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 106583.3333,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 92375,
    "count": 24,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 81539.2857,
    "count": 112,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 74001.1111,
    "count": 45,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 55167.9742,
    "count": 8150,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 93756.7213,
    "count": 122,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL CHEMICALS",
    "salary": 93300,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "NOT SPECIFIED FOOD INDUSTRIES",
    "salary": 92173.913,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 89570.6827,
    "count": 249,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 81693.2432,
    "count": 74,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Military",
    "industry": "",
    "salary": 40240,
    "count": 152,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 74600,
    "count": 30,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 46179.3333,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 25282.0513,
    "count": 78,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Mining",
    "industry": "",
    "salary": 53515,
    "count": 180,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 66250.6494,
    "count": 77,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 49975.5102,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 37994.8718,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 37557.1429,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 64004.3823,
    "count": 6718,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 104242.9367,
    "count": 790,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 101111.5877,
    "count": 718,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 94170.2381,
    "count": 84,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 87571.9355,
    "count": 713,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 72873.7582,
    "count": 306,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 55608.1355,
    "count": 2628,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 67296.6667,
    "count": 66,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 62114.8135,
    "count": 1153,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 59838.306,
    "count": 183,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 59442.7083,
    "count": 192,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 54300.438,
    "count": 137,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 30586.694,
    "count": 6954,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 71377.9661,
    "count": 59,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 59250.2778,
    "count": 72,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 49157.6035,
    "count": 459,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 48900,
    "count": 86,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 47968.1818,
    "count": 22,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "",
    "salary": 30112.2646,
    "count": 2729,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 59677.3333,
    "count": 105,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 59626,
    "count": 50,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46695,
    "count": 110,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 44475.5556,
    "count": 81,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 34815.2542,
    "count": 59,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 23242.8693,
    "count": 1415,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 34952,
    "count": 50,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 27334.173,
    "count": 659,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18818.9725,
    "count": 545,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17835.4037,
    "count": 161,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 42657.7912,
    "count": 3056,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 70182.3529,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 62678.9565,
    "count": 230,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 53370.7968,
    "count": 251,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 45925.1955,
    "count": 358,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 45503.5714,
    "count": 28,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 73162.9741,
    "count": 501,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 82577.3063,
    "count": 271,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 73500,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 63235.7143,
    "count": 56,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 60919.802,
    "count": 101,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 57567.9245,
    "count": 53,
    "rank": 5
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 57973.0992,
    "count": 1976,
    "rank": 0
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 89926.0417,
    "count": 96,
    "rank": 1
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 79360.2273,
    "count": 176,
    "rank": 2
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "FURNITURE AND HOME FURNISHING MERCHANT WHOLESALERS",
    "salary": 73710.5263,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 69197.7273,
    "count": 44,
    "rank": 4
  },
  {
    "state": "Illinois",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 68748.1481,
    "count": 81,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 30700.5505,
    "count": 327,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 33779.403,
    "count": 201,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 25790.6383,
    "count": 94,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 25160,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Construction",
    "industry": "",
    "salary": 38811.4991,
    "count": 1701,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 38811.4991,
    "count": 1701,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 32669.1791,
    "count": 3350,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 36984.5,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 34119.3656,
    "count": 1198,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 32128.5884,
    "count": 2026,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 25797.5472,
    "count": 106,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 14370.4236,
    "count": 3149,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 22510.5441,
    "count": 136,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 18063.2967,
    "count": 182,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "BOWLING CENTERS",
    "salary": 17832.7273,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 17801.8182,
    "count": 99,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 16173.0769,
    "count": 52,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "",
    "salary": 50312.6671,
    "count": 1541,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 100320.614,
    "count": 114,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 55395.122,
    "count": 82,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 54921.7573,
    "count": 478,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 46578.9474,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 44271.8499,
    "count": 373,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 43590.2181,
    "count": 3714,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 59892.1326,
    "count": 347,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 56217.8771,
    "count": 179,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 50073.2002,
    "count": 1653,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 45948.3491,
    "count": 212,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 44673.913,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "",
    "salary": 42407.1193,
    "count": 486,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 69393.4783,
    "count": 92,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 53297.2222,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 52708.1967,
    "count": 61,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 38665.8824,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 38294.5946,
    "count": 74,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 47204.5259,
    "count": 6180,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 105759.5506,
    "count": 178,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 87259.5745,
    "count": 47,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 85030.6122,
    "count": 49,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "FRUIT AND VEGETABLE PRESERVING AND SPECIALTY FOODS",
    "salary": 72864.1026,
    "count": 39,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Manufacturing",
    "industry": "CONSTRUCTION, AND MINING AND OIL AND GAS FIELD MACHINERY",
    "salary": 69758.6957,
    "count": 46,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Military",
    "industry": "",
    "salary": 46268.5714,
    "count": 35,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 56968.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Mining",
    "industry": "",
    "salary": 60825.2874,
    "count": 87,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 68637.5,
    "count": 48,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 52700,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 39673.0769,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 43523.1568,
    "count": 2474,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 74563.5945,
    "count": 217,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 69562.5346,
    "count": 217,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 68902.9101,
    "count": 189,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 56033.7179,
    "count": 234,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 51040,
    "count": 75,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43238.831,
    "count": 1266,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 59539.2,
    "count": 125,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 49515.3846,
    "count": 78,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 44214.8936,
    "count": 94,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 43275.4305,
    "count": 604,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 40176.9231,
    "count": 104,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 23937.1378,
    "count": 3700,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 48196,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 39991.0811,
    "count": 185,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "MUSICAL INSTRUMENT AND SUPPLIES STORES",
    "salary": 39543.8462,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 37315,
    "count": 104,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 37222.069,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "",
    "salary": 26780.3857,
    "count": 1400,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 71352.4,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 67637.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40060.5263,
    "count": 76,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 34064,
    "count": 25,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 32692.4255,
    "count": 235,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18163.5518,
    "count": 656,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 23109.2359,
    "count": 301,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 20030,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17246.5217,
    "count": 69,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 12664.6617,
    "count": 266,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 40370.0551,
    "count": 1344,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 64024.2857,
    "count": 70,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 48522.449,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 45060.7438,
    "count": 121,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 42716.8966,
    "count": 174,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 40190.0783,
    "count": 511,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 61949.5238,
    "count": 273,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 82071.4286,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 74764.8438,
    "count": 128,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 57013.7931,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 38468.8,
    "count": 25,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 34807.1429,
    "count": 56,
    "rank": 5
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 51448.4478,
    "count": 786,
    "rank": 0
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "FARM SUPPLIES MERCHANT WHOLESALERS",
    "salary": 93305.5556,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 89511.8367,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 73547.619,
    "count": 42,
    "rank": 3
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 71992.9825,
    "count": 57,
    "rank": 4
  },
  {
    "state": "Indiana",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 57346.1538,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 31621.6667,
    "count": 516,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 35713.0303,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 31778.7066,
    "count": 317,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 30128.5714,
    "count": 161,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Construction",
    "industry": "",
    "salary": 39023.5025,
    "count": 985,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 39023.5025,
    "count": 985,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 30851.3393,
    "count": 1792,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 31128.5518,
    "count": 1091,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 30915,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 30329.2558,
    "count": 645,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 13255.9954,
    "count": 1306,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 19893.3333,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 16803.8636,
    "count": 44,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 16744.4231,
    "count": 104,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 16583.0303,
    "count": 33,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 16007.8967,
    "count": 271,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "",
    "salary": 50540.0095,
    "count": 1055,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 78163.8298,
    "count": 94,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 53237.7238,
    "count": 391,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 48116.5176,
    "count": 313,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 47980.2532,
    "count": 79,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 39191.6667,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 39789.8951,
    "count": 1811,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 78866.6667,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 70852.3529,
    "count": 102,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 50293.0556,
    "count": 144,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 47307.327,
    "count": 737,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 45065.6863,
    "count": 51,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "",
    "salary": 38040.6667,
    "count": 315,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 49011.3208,
    "count": 53,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 42213.3333,
    "count": 60,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 40731.5789,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 37807.3171,
    "count": 41,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 35178.9474,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 43731.4259,
    "count": 2700,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "PAINT, COATING, AND ADHESIVES",
    "salary": 83400,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "ALUMINUM PRODUCTION AND PROCESSING",
    "salary": 73964.2857,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 66347.4576,
    "count": 59,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL IMPLEMENTS",
    "salary": 59005.9524,
    "count": 252,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Manufacturing",
    "industry": "CONSTRUCTION, AND MINING AND OIL AND GAS FIELD MACHINERY",
    "salary": 58285.3659,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Military",
    "industry": "",
    "salary": 61515.7895,
    "count": 19,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Mining",
    "industry": "",
    "salary": 52041.0256,
    "count": 39,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 38617.1429,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 37490.0743,
    "count": 942,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 68762.2222,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 61192.1569,
    "count": 102,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 46098.3333,
    "count": 60,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "ACCOUNTING, TAX PREPARATION, BOOKKEEPING, AND PAYROLL SERVICES",
    "salary": 44127.0968,
    "count": 62,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Professional Services",
    "industry": "OTHER ADMINISTRATIVE AND OTHER SUPPORT SERVICES",
    "salary": 41255,
    "count": 24,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 45580.5236,
    "count": 592,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 54789.4737,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 52546.9388,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 50298.9583,
    "count": 48,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 50041.7647,
    "count": 238,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 45322.0779,
    "count": 77,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 24530.9571,
    "count": 1912,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 43128.5124,
    "count": 121,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 40592.3077,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 40341.8367,
    "count": 147,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 35886.6667,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 33740.8451,
    "count": 71,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "",
    "salary": 25801.0417,
    "count": 624,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 70000,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 33519.913,
    "count": 115,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 31842,
    "count": 50,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 30875.8333,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 27177.9085,
    "count": 153,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20287.3449,
    "count": 403,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 29551.3889,
    "count": 144,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 19941.5789,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 15610,
    "count": 60,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 14471.7222,
    "count": 180,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 41993.6578,
    "count": 637,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 59628.2051,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 59383.3333,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 44841.9014,
    "count": 284,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 43343.6842,
    "count": 38,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 38941.2097,
    "count": 124,
    "rank": 5
  },
  {
    "state": "Iowa",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 54710.9028,
    "count": 144,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 63472.1918,
    "count": 73,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 43239.1304,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 43028.5714,
    "count": 21,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46830.8614,
    "count": 534,
    "rank": 0
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 60535.7143,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 59050,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 58652,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 57900,
    "count": 64,
    "rank": 4
  },
  {
    "state": "Iowa",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 57000,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 29394.7778,
    "count": 450,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 29963.36,
    "count": 250,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 29890.3448,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 28167.6048,
    "count": 167,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Construction",
    "industry": "",
    "salary": 39320.2239,
    "count": 804,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 39320.2239,
    "count": 804,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 29988.564,
    "count": 1741,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 31322.4831,
    "count": 443,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 29743.8746,
    "count": 1244,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 22964.8936,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 12058.4577,
    "count": 1206,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 21430.2632,
    "count": 38,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 17523.75,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 14134.1553,
    "count": 219,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 14102.9268,
    "count": 82,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 11096.8421,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "",
    "salary": 48624.5614,
    "count": 823,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 80000,
    "count": 85,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 58979.2453,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 52498.6545,
    "count": 220,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 47410,
    "count": 20,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 44013.5714,
    "count": 280,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 44867.7367,
    "count": 1732,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 85551.8519,
    "count": 135,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 63447.3684,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 56846.75,
    "count": 80,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 50305.7471,
    "count": 696,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48633.7662,
    "count": 154,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "",
    "salary": 52311.6949,
    "count": 295,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 97916.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 92793.3333,
    "count": 45,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 64245.614,
    "count": 57,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 58882.3529,
    "count": 34,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 51878.7879,
    "count": 33,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 48405.5538,
    "count": 1905,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 98460,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 84511.9048,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "FOUNDRIES",
    "salary": 71585.7143,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 71270.4225,
    "count": 71,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 66248.1481,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Military",
    "industry": "",
    "salary": 39838.5093,
    "count": 161,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 42213.3333,
    "count": 30,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 39008.9431,
    "count": 123,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Mining",
    "industry": "",
    "salary": 57159.3103,
    "count": 145,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 80807.6923,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 55021.9048,
    "count": 105,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 30092.3077,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 49885.3991,
    "count": 1115,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "TRAVEL ARRANGEMENTS AND RESERVATION SERVICES",
    "salary": 90206.25,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 85892.3077,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 80276.5766,
    "count": 111,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 77300.8696,
    "count": 115,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 70503.7383,
    "count": 107,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 44385.9471,
    "count": 681,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 78472.2222,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 55213.4615,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 51313.0952,
    "count": 84,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 45170,
    "count": 40,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 43770.2281,
    "count": 263,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28454.4087,
    "count": 1522,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 59961.5385,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 56721.7391,
    "count": 46,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 53512.7184,
    "count": 103,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 47057.8947,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Retail Trade",
    "industry": "SHOE STORES",
    "salary": 43939.6,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "",
    "salary": 29917.0181,
    "count": 607,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 38283.3333,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 36204.2857,
    "count": 70,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 35798.1726,
    "count": 197,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 34120,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 34015.9551,
    "count": 89,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 19102.7744,
    "count": 328,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 23878.5714,
    "count": 147,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21813.3333,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 14179.313,
    "count": 131,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 12183.5,
    "count": 20,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44612.7561,
    "count": 537,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 69219.1837,
    "count": 49,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 64958.3333,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 59519.0476,
    "count": 21,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 57115,
    "count": 60,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 43327.6503,
    "count": 183,
    "rank": 5
  },
  {
    "state": "Kansas",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 54176.4043,
    "count": 188,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 61334.1311,
    "count": 122,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 54377.7778,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 29021.4286,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 51954.1562,
    "count": 397,
    "rank": 0
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 73625,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 70126.3158,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 65310,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 62164.2857,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Kansas",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 61835.7143,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24554.8913,
    "count": 276,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 25900,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 25665,
    "count": 98,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 25473.6842,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 23857.0588,
    "count": 136,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Construction",
    "industry": "",
    "salary": 36806.7062,
    "count": 1045,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 36806.7062,
    "count": 1045,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34995.7803,
    "count": 2249,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39508.4306,
    "count": 720,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33490.9875,
    "count": 1438,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 29250,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 21946.7532,
    "count": 77,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 15772.961,
    "count": 1844,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 32659.0789,
    "count": 76,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23240.9091,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 20122.037,
    "count": 108,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 16731.4747,
    "count": 217,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 14043.2268,
    "count": 1345,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "",
    "salary": 55060.3945,
    "count": 1100,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 95561.8571,
    "count": 70,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 67229.9694,
    "count": 327,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 57825,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "AUTOMOTIVE EQUIPMENT RENTAL AND LEASING",
    "salary": 54154.5455,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 51038.6667,
    "count": 90,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 46760.9102,
    "count": 2450,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 70193.4797,
    "count": 296,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 54378.1197,
    "count": 117,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 53878.8079,
    "count": 151,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "OFFICES OF CHIROPRACTORS",
    "salary": 53475,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 48539.3352,
    "count": 1083,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "",
    "salary": 39157.2152,
    "count": 316,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 48624.4444,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 48421.6667,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 44430.4348,
    "count": 69,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 39521.7391,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 38641.8519,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 47120.3162,
    "count": 2878,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 106626.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 82561.1111,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "HOUSEHOLD APPLIANCES",
    "salary": 74372.2222,
    "count": 54,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 73681.8182,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 72961.9048,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Military",
    "industry": "",
    "salary": 36280.7692,
    "count": 182,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 37185.8974,
    "count": 156,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Military",
    "industry": "MILITARY RESERVES OR NATIONAL GUARD",
    "salary": 23618.1818,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Mining",
    "industry": "",
    "salary": 58115.2838,
    "count": 229,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 73588.2353,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 59534.1176,
    "count": 170,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 39431.4286,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 41362.9897,
    "count": 1649,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 71845.5556,
    "count": 180,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 68769.2308,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 67813.9344,
    "count": 122,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 66811.6505,
    "count": 103,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 59932.5926,
    "count": 135,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 41294.0267,
    "count": 972,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 50246.6327,
    "count": 98,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 44869.4444,
    "count": 72,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 42446.4286,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 41301.6,
    "count": 125,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 40791.7293,
    "count": 133,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 25664.9855,
    "count": 2413,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 66645,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 48963.6364,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 45879.2903,
    "count": 155,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "FURNITURE AND HOME FURNISHINGS STORES",
    "salary": 41050,
    "count": 54,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 39587.6744,
    "count": 129,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "",
    "salary": 29453.4515,
    "count": 846,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 64773.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 50300,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 47738.8889,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 36409.8,
    "count": 100,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 33538.4615,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18091.2102,
    "count": 471,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 25135.2941,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 22052.0635,
    "count": 189,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17750.3125,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 14411.2017,
    "count": 233,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 43801.4267,
    "count": 907,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 72225,
    "count": 40,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 57125,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 50198.3838,
    "count": 198,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 47959.2593,
    "count": 81,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 47450,
    "count": 22,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 60634.6154,
    "count": 208,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 97407.6923,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 77231.25,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 63595.9184,
    "count": 98,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 46155.5556,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 38337.7778,
    "count": 45,
    "rank": 5
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 47605.4706,
    "count": 510,
    "rank": 0
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 67823.5294,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 56248.0645,
    "count": 62,
    "rank": 2
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 55004,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 53761.5385,
    "count": 52,
    "rank": 4
  },
  {
    "state": "Kentucky",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 52741.1765,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 30263.125,
    "count": 240,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 44611.7647,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 38747.619,
    "count": 63,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 24594.7917,
    "count": 96,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 23713.0769,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 23515.4545,
    "count": 33,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Construction",
    "industry": "",
    "salary": 40464.8834,
    "count": 1415,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 40464.8834,
    "count": 1415,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35609.5628,
    "count": 2127,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 44975,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 41522.8361,
    "count": 543,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33722.3619,
    "count": 1503,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 27543.5385,
    "count": 65,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19346.9388,
    "count": 2058,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 27120.4545,
    "count": 88,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 25311.2245,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 24915.3425,
    "count": 365,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 22004.1262,
    "count": 206,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 18149.7872,
    "count": 47,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "",
    "salary": 47981.2104,
    "count": 1041,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 73704.2553,
    "count": 47,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 55290.378,
    "count": 291,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 51846.7391,
    "count": 92,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 50740.3846,
    "count": 52,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 45752.1898,
    "count": 274,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 45843.8333,
    "count": 2460,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 57532.4468,
    "count": 94,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 55872.478,
    "count": 1138,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 49185,
    "count": 214,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48249.7409,
    "count": 193,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 43010.7143,
    "count": 168,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "",
    "salary": 43293.3929,
    "count": 336,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 65645.4545,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 64629.4118,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 50482.2917,
    "count": 96,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 39462,
    "count": 50,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 37208.3333,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 54786.1355,
    "count": 1638,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 94650,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 83338.3871,
    "count": 248,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 78791.3043,
    "count": 138,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 74800,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Manufacturing",
    "industry": "RESIN, SYNTHETIC RUBBER, AND FIBERS AND FILAMENTS",
    "salary": 64160.8696,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Military",
    "industry": "",
    "salary": 43178.5714,
    "count": 168,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 49853.9474,
    "count": 76,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 35141.2698,
    "count": 63,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Mining",
    "industry": "",
    "salary": 80943.9095,
    "count": 729,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 82050.6173,
    "count": 81,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 80957.3642,
    "count": 626,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 55900,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 48682.2259,
    "count": 1797,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 71811.8213,
    "count": 291,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 70061.0037,
    "count": 269,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 66137.1429,
    "count": 140,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "SPECIALIZED DESIGN SERVICES",
    "salary": 59277.7778,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 55742.1569,
    "count": 102,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43568.2146,
    "count": 1165,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 57808.8235,
    "count": 68,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 55325.641,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 53251.3514,
    "count": 37,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 46463.4677,
    "count": 124,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 45016.8539,
    "count": 89,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 26222.5209,
    "count": 2269,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "OTHER DIRECT SELLING ESTABLISHMENTS",
    "salary": 52870.5882,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 46732.5984,
    "count": 127,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 46391.3415,
    "count": 164,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 44437.2,
    "count": 25,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 40059.2593,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "",
    "salary": 28560.2372,
    "count": 843,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 42134.7826,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 39287.3563,
    "count": 87,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 37025,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 36613.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 35357.8947,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20501.907,
    "count": 430,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26065.198,
    "count": 202,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 22538.1818,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 15055.2941,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 14808.836,
    "count": 189,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45660.2668,
    "count": 787,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 78507.4074,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 59256.2857,
    "count": 70,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 55950,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 54527.7778,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 52330,
    "count": 140,
    "rank": 5
  },
  {
    "state": "Louisiana",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 56938.6831,
    "count": 243,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 67688.5714,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 65271.4286,
    "count": 119,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 38596.7742,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 38595.9184,
    "count": 49,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 53437.7593,
    "count": 482,
    "rank": 0
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 85133.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 74603.5714,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 73553.5714,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS NONDURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 70972.7273,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Louisiana",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 58822.9167,
    "count": 48,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 25494.2675,
    "count": 157,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 42883.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 35819.3548,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 31585.6098,
    "count": 41,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 18326.6667,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 14192.549,
    "count": 51,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Construction",
    "industry": "",
    "salary": 37386.2595,
    "count": 393,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 37386.2595,
    "count": 393,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 31768.1196,
    "count": 803,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33491.028,
    "count": 535,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 28850.9914,
    "count": 232,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 14947.4194,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 13608.3278,
    "count": 598,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23146.5385,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 17021.5,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 15549.1071,
    "count": 56,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 13153.6264,
    "count": 91,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 12111.2195,
    "count": 369,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "",
    "salary": 54621.3456,
    "count": 327,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 98457.1429,
    "count": 28,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 66562.963,
    "count": 81,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 48258.5586,
    "count": 111,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 43356.6154,
    "count": 65,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 30511.1111,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 40380.1517,
    "count": 857,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 59229.6296,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 50114.7541,
    "count": 61,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 48626.1376,
    "count": 378,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 43970.9091,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 43036,
    "count": 75,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Information",
    "industry": "",
    "salary": 46103.1068,
    "count": 103,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 60750,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 57025,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 38586.8,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 36622.2222,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 44404.3657,
    "count": 607,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 89894.7368,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 73141.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 61735.8025,
    "count": 81,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 61413.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Manufacturing",
    "industry": "SHIP AND BOAT BUILDING",
    "salary": 52700,
    "count": 96,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Military",
    "industry": "",
    "salary": 37352.9412,
    "count": 17,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Mining",
    "industry": "",
    "salary": 123357.1429,
    "count": 14,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 41250,
    "count": 431,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 68145.5,
    "count": 40,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 60250,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 59278.2609,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 58918.6111,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 58227.3077,
    "count": 26,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43643.253,
    "count": 332,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 61866.6667,
    "count": 36,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 61658.6207,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 45217.5962,
    "count": 104,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 42994.2857,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 42190.9091,
    "count": 33,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 26346.8549,
    "count": 779,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 49026.4706,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 43321.4286,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 41794.4444,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 41694.1176,
    "count": 51,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 37019.5652,
    "count": 46,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "",
    "salary": 25753.1897,
    "count": 232,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 39597.8125,
    "count": 32,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 30890.7407,
    "count": 54,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 29700,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 25136.3636,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 22040.6818,
    "count": 44,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 24911.4286,
    "count": 154,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 25828.4314,
    "count": 102,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 22076.5,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 40720.5238,
    "count": 210,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 56330,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 43876.9231,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 43580,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 41448.0392,
    "count": 51,
    "rank": 4
  },
  {
    "state": "Maine",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 37060.9231,
    "count": 65,
    "rank": 5
  },
  {
    "state": "Maine",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 64147.0588,
    "count": 51,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 70976.4706,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 42538.5135,
    "count": 148,
    "rank": 0
  },
  {
    "state": "Maine",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 80380,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Maine",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 75945.4545,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Maine",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 43181.8182,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Maine",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 30579.0698,
    "count": 43,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 32770.2542,
    "count": 118,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 29756.4103,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 27259.322,
    "count": 59,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Construction",
    "industry": "",
    "salary": 49739.1166,
    "count": 1732,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 49739.1166,
    "count": 1732,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 46357.9041,
    "count": 3440,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 51942.3953,
    "count": 1194,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 44427.3081,
    "count": 2032,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 32890.2885,
    "count": 208,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 21569.8593,
    "count": 2701,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 42887.4144,
    "count": 263,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 39101.9685,
    "count": 127,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 30746.7742,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 28239.1935,
    "count": 124,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 18045.9829,
    "count": 1633,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "",
    "salary": 75635.2058,
    "count": 1919,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 114185.6917,
    "count": 253,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 91983.2044,
    "count": 181,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 87634.0426,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 80307.7273,
    "count": 440,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 62165.509,
    "count": 501,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 57748.1717,
    "count": 3424,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 77813.8889,
    "count": 360,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 63077.5321,
    "count": 1633,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 63001.1207,
    "count": 232,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 58962.5,
    "count": 56,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 57060.6557,
    "count": 183,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "",
    "salary": 64028.2517,
    "count": 715,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 92642.2785,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 80626.5487,
    "count": 113,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 77701.9355,
    "count": 155,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 71726.3158,
    "count": 19,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 60246.4286,
    "count": 28,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 69352.7447,
    "count": 1512,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 112398.5294,
    "count": 68,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 101676.4706,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 101004.3478,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 99687.0968,
    "count": 93,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 99147.2727,
    "count": 55,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "",
    "salary": 55765.9933,
    "count": 297,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 92818.1818,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 76716.4179,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 60473.0769,
    "count": 52,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 49375,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 43376.9231,
    "count": 130,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Mining",
    "industry": "",
    "salary": 46520,
    "count": 20,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 40026.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 78343.532,
    "count": 4585,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 122567.0419,
    "count": 453,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 102589.4949,
    "count": 495,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 98371.0052,
    "count": 776,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 89325.0327,
    "count": 459,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 86836.9792,
    "count": 576,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 81063.4762,
    "count": 3524,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 94742.3313,
    "count": 163,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 92379.1209,
    "count": 455,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 89981.4089,
    "count": 944,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 84349.2701,
    "count": 548,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 83445.2555,
    "count": 137,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29778.8265,
    "count": 2974,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 59880,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "JEWELRY, LUGGAGE, AND LEATHER GOODS STORES",
    "salary": 57079,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 47279.0625,
    "count": 96,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 46832.4766,
    "count": 214,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 43792.3077,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "",
    "salary": 41426.779,
    "count": 1579,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 87159.1935,
    "count": 124,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 70147.3684,
    "count": 38,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 62281.5035,
    "count": 286,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 55006.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 42047.619,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 29164.1176,
    "count": 680,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 45313.6364,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 37706.0328,
    "count": 305,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21534.5,
    "count": 40,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 20680.4473,
    "count": 313,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 46155.3172,
    "count": 993,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 64356.6154,
    "count": 65,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 62128.2609,
    "count": 46,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 55177.2727,
    "count": 176,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 52405.5118,
    "count": 127,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 43152.4324,
    "count": 185,
    "rank": 5
  },
  {
    "state": "Maryland",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 79094.3925,
    "count": 214,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 95814.6789,
    "count": 109,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 79994.8718,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 52950,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 47942.8571,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 58243.6439,
    "count": 601,
    "rank": 0
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 95670.7317,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 84856.25,
    "count": 64,
    "rank": 2
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 72044.4444,
    "count": 45,
    "rank": 3
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 71840,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Maryland",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 66530.7692,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 25159.6364,
    "count": 110,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 55505.8824,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 20742.1875,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 18222.8302,
    "count": 53,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Construction",
    "industry": "",
    "salary": 49672.8117,
    "count": 1540,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 49672.8117,
    "count": 1540,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 44212.1419,
    "count": 5089,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 48057.1053,
    "count": 38,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 46338.2412,
    "count": 2189,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 43695.8791,
    "count": 2565,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 32508.6869,
    "count": 297,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18816.6814,
    "count": 3384,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 36119.7222,
    "count": 144,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 31141.3983,
    "count": 236,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 26240.9412,
    "count": 170,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 19661.7647,
    "count": 34,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 17074.1412,
    "count": 2096,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "",
    "salary": 89654.7449,
    "count": 2666,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 133217.7134,
    "count": 621,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 96008.8435,
    "count": 147,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 84938.1356,
    "count": 708,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 84581.8182,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 78002.5818,
    "count": 581,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 61363.6404,
    "count": 4755,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 94953.2972,
    "count": 461,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 69860.9995,
    "count": 2191,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 63663.9301,
    "count": 229,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 58615.407,
    "count": 344,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 55953.7879,
    "count": 330,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "",
    "salary": 69362.7611,
    "count": 833,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 106425,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 103649,
    "count": 100,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 92973.3333,
    "count": 105,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 92847.6744,
    "count": 86,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 85810.4878,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 69756.6637,
    "count": 3396,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 124558.6081,
    "count": 273,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 107885.4839,
    "count": 62,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 97511.1111,
    "count": 90,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 96310.1695,
    "count": 59,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Manufacturing",
    "industry": "SOAP, CLEANING COMPOUND, AND COSMETICS",
    "salary": 95300,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Military",
    "industry": "",
    "salary": 51257.3529,
    "count": 68,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 63369.2308,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 62216.6667,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 53407.6923,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 32781.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Mining",
    "industry": "",
    "salary": 64120,
    "count": 15,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 73752.6154,
    "count": 4628,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 102427.3846,
    "count": 455,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 99390.665,
    "count": 782,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 91762.8203,
    "count": 512,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 90206.4516,
    "count": 31,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 90152.6767,
    "count": 467,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 61407.6114,
    "count": 1503,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 70844.5378,
    "count": 119,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 69665.1163,
    "count": 86,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 69311.1283,
    "count": 647,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 62008.3333,
    "count": 84,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 55184.3373,
    "count": 83,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 33252.9737,
    "count": 3958,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 86842.4242,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 71928.4483,
    "count": 174,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 60986.4198,
    "count": 81,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "HOUSEHOLD APPLIANCE STORES",
    "salary": 52466.6667,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 51246.9756,
    "count": 205,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "",
    "salary": 32202.2938,
    "count": 1443,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 69622.3636,
    "count": 55,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 67893.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 49904.1667,
    "count": 24,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 42265.8537,
    "count": 41,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 38448.3636,
    "count": 275,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 26275.5852,
    "count": 1051,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 30754.2105,
    "count": 38,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 30147.3158,
    "count": 570,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 29776.4286,
    "count": 42,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 19981.0474,
    "count": 401,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44167.7723,
    "count": 1019,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 70850,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "WAREHOUSING AND STORAGE",
    "salary": 60236.8421,
    "count": 38,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 53565.6716,
    "count": 67,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 51737.2637,
    "count": 201,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 49699.2,
    "count": 125,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 78194.47,
    "count": 217,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 111607.1429,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 83974.7899,
    "count": 119,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 75104.5455,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 62225,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 55638.8889,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 62755.4182,
    "count": 801,
    "rank": 0
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 110292.4242,
    "count": 66,
    "rank": 1
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 99620.5882,
    "count": 102,
    "rank": 2
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 83116.2791,
    "count": 43,
    "rank": 3
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "PAPER AND PAPER PRODUCTS MERCHANT WHOLESALERS",
    "salary": 81766.6667,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Massachusetts",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 65350.8772,
    "count": 57,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 26824.8353,
    "count": 668,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 33043.4783,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 30281.4815,
    "count": 54,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 29626.3158,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 27322.5071,
    "count": 351,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 24003.5751,
    "count": 193,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Construction",
    "industry": "",
    "salary": 38958.3252,
    "count": 2165,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 38958.3252,
    "count": 2165,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 36555.6189,
    "count": 4613,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39938.0397,
    "count": 1561,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35546.8719,
    "count": 2858,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 31264.4,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 23155.1479,
    "count": 169,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 13958.6021,
    "count": 4564,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 23033.1469,
    "count": 143,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 18962.0588,
    "count": 136,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 16566.0623,
    "count": 353,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 16505.4188,
    "count": 764,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Entertainment",
    "industry": "BOWLING CENTERS",
    "salary": 15876.1905,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "",
    "salary": 51250.4252,
    "count": 2352,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 85342.3711,
    "count": 194,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 56773.6364,
    "count": 220,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 55773.1912,
    "count": 680,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 48172.8839,
    "count": 534,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 40656.9106,
    "count": 123,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 45154.8079,
    "count": 5726,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 68570.2314,
    "count": 605,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 52297.9167,
    "count": 48,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 51685.9247,
    "count": 2471,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 48672.695,
    "count": 282,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 43641.9079,
    "count": 304,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "",
    "salary": 45513.0398,
    "count": 704,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 122325,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 70854.1667,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 61317.7966,
    "count": 118,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 60742.3077,
    "count": 78,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 48551.3433,
    "count": 134,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 53017.133,
    "count": 8221,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "HOUSEHOLD APPLIANCES",
    "salary": 80442.4658,
    "count": 73,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 80106.0606,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 73538.843,
    "count": 121,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 72526.0428,
    "count": 187,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 71142.8571,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Military",
    "industry": "",
    "salary": 43079.0323,
    "count": 62,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 48213.7931,
    "count": 29,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 37329.4118,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Mining",
    "industry": "",
    "salary": 62963.0952,
    "count": 84,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 96920,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 49020.5882,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 39775,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 46138.4185,
    "count": 4129,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 98920.8333,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 76909.2841,
    "count": 433,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 72743.8356,
    "count": 365,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 67177.0915,
    "count": 306,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 65088.8347,
    "count": 369,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 45098.9407,
    "count": 1907,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 59235,
    "count": 168,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 56130.2222,
    "count": 90,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 50644.6269,
    "count": 67,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 47101.9166,
    "count": 767,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 41156.5591,
    "count": 93,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 23781.1663,
    "count": 5299,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 38755.6,
    "count": 125,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "VENDING MACHINE OPERATORS",
    "salary": 38736.3636,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 38665.5637,
    "count": 408,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 37707.1698,
    "count": 53,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 34383.2534,
    "count": 292,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "",
    "salary": 26209.1484,
    "count": 1968,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 65403.4483,
    "count": 29,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 46081.5094,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 40862.9268,
    "count": 41,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 37594.382,
    "count": 89,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 35910.8133,
    "count": 332,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 19412.3118,
    "count": 930,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 24386.2619,
    "count": 420,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 18745,
    "count": 122,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 16352.459,
    "count": 61,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 13843.5168,
    "count": 327,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 40296.0438,
    "count": 1461,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 60192.2727,
    "count": 44,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 58350,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 51551.7699,
    "count": 113,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 48703.3333,
    "count": 126,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 44329.5203,
    "count": 271,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 71151.1807,
    "count": 415,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 82854.3307,
    "count": 254,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 74863.8889,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 55534.5455,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 44726.087,
    "count": 46,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 39014.6341,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 53714.4783,
    "count": 1016,
    "rank": 0
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 92055.3571,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 73343.9394,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "NOT SPECIFIED WHOLESALE TRADE",
    "salary": 70764.7059,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 70090,
    "count": 132,
    "rank": 4
  },
  {
    "state": "Michigan",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 60632.7869,
    "count": 61,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 38045.3266,
    "count": 888,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 50222,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 38766.6545,
    "count": 547,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 38692.3077,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 35662.1116,
    "count": 251,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 35223.8636,
    "count": 44,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Construction",
    "industry": "",
    "salary": 43471.9365,
    "count": 1828,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 43471.9365,
    "count": 1828,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 32235.7001,
    "count": 2821,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 44706.25,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33117.8452,
    "count": 1847,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 31415.858,
    "count": 845,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 22181.8584,
    "count": 113,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 16530.9935,
    "count": 2446,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23086.1386,
    "count": 101,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 20956.3158,
    "count": 76,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 20587.7376,
    "count": 526,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 19554.4882,
    "count": 254,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Entertainment",
    "industry": "BOWLING CENTERS",
    "salary": 15835,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "",
    "salary": 60726.9971,
    "count": 1725,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 95417.1569,
    "count": 204,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 64342.0863,
    "count": 556,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "OTHER CONSUMER GOODS RENTAL",
    "salary": 63878.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 58566.9725,
    "count": 109,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 54196.5849,
    "count": 489,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 46555.5908,
    "count": 3817,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 86429.2,
    "count": 125,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 59833.4397,
    "count": 1535,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 55518.0328,
    "count": 183,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 51225.5102,
    "count": 196,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 50855.3333,
    "count": 480,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "",
    "salary": 46901.7554,
    "count": 507,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 83085,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 80058.8235,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 62559.7015,
    "count": 67,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 61400,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 59705.2083,
    "count": 96,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 51020.8445,
    "count": 4026,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 84483.3333,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "PAINT, COATING, AND ADHESIVES",
    "salary": 83888.8889,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 81180.6452,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 81120.8333,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 78334.2466,
    "count": 73,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Military",
    "industry": "",
    "salary": 44145,
    "count": 20,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 33858.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Mining",
    "industry": "",
    "salary": 67211.4286,
    "count": 105,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 70235.2941,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 68564.8148,
    "count": 54,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 59062.963,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 53835.1235,
    "count": 2389,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 101480,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 95598,
    "count": 200,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 83423.6111,
    "count": 288,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 80284.5778,
    "count": 225,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 64883.0357,
    "count": 56,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 47536.2412,
    "count": 1136,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 52483.1034,
    "count": 406,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 49434.1818,
    "count": 110,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 48352.622,
    "count": 164,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 47731.8182,
    "count": 44,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 45129.1139,
    "count": 79,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28837.9184,
    "count": 3137,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 58175,
    "count": 36,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "HOUSEHOLD APPLIANCE STORES",
    "salary": 54852.6316,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 52858.8235,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 48378,
    "count": 145,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 44900,
    "count": 24,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "",
    "salary": 29334.0579,
    "count": 1210,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 61366.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 52671.4286,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 42412.6667,
    "count": 225,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 37978.75,
    "count": 32,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 35000,
    "count": 77,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20872.4519,
    "count": 779,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26605.8621,
    "count": 377,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 23515.625,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 16304.1509,
    "count": 212,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 12786.3924,
    "count": 158,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44839.3054,
    "count": 1123,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 91545.4545,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 67586.1111,
    "count": 72,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 59292.3077,
    "count": 65,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 51819.1919,
    "count": 99,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 46636.545,
    "count": 411,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 67450.2692,
    "count": 260,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 89590.9091,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 70646.5761,
    "count": 184,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 61526.6667,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 58781.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 52731.0345,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 52940.2278,
    "count": 834,
    "rank": 0
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 81972.4138,
    "count": 29,
    "rank": 1
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 79303.3898,
    "count": 59,
    "rank": 2
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 69500,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 67922.7273,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Minnesota",
    "industry_type": "Wholesale Trade",
    "industry": "FARM SUPPLIES MERCHANT WHOLESALERS",
    "salary": 65164.0625,
    "count": 32,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33322.7686,
    "count": 242,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 40116.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 39020.5505,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 28426.5306,
    "count": 49,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 27748.8462,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 24507.8947,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Construction",
    "industry": "",
    "salary": 37898.4207,
    "count": 656,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 37898.4207,
    "count": 656,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 30339.9495,
    "count": 1387,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 35488.7042,
    "count": 355,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 28764.3996,
    "count": 991,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 23576.9231,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 16068.0805,
    "count": 1292,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 38845,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 22242.3077,
    "count": 91,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 21889.772,
    "count": 307,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 17561.5385,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 13030.0724,
    "count": 829,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "",
    "salary": 44819.5581,
    "count": 611,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 55722.2973,
    "count": 148,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 49176.5464,
    "count": 194,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 47081.2903,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 38379.7101,
    "count": 69,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Finance",
    "industry": "OTHER CONSUMER GOODS RENTAL",
    "salary": 34815.7895,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 42840.2273,
    "count": 1496,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 55565.1485,
    "count": 101,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 53150.8772,
    "count": 57,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 50833.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 49263.0866,
    "count": 716,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 45023.2308,
    "count": 65,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "",
    "salary": 40967.0659,
    "count": 167,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 58284,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 46475.6757,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 44317.5,
    "count": 44,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 26033.1818,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Information",
    "industry": "LIBRARIES AND ARCHIVES",
    "salary": 22014.2857,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 37784.8065,
    "count": 1654,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 80700,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 64766.6667,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 58992.3077,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "IRON AND STEEL MILLS AND STEEL PRODUCTS",
    "salary": 56236,
    "count": 50,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Manufacturing",
    "industry": "VENEER, PLYWOOD, AND ENGINEERED WOOD PRODUCTS",
    "salary": 52720,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Military",
    "industry": "",
    "salary": 34546.3636,
    "count": 110,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 44721.4286,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 37085.7143,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 27628.125,
    "count": 64,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Mining",
    "industry": "",
    "salary": 75230.6569,
    "count": 137,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 79894.1176,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 79107.4074,
    "count": 108,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 38964.1879,
    "count": 809,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "TRAVEL ARRANGEMENTS AND RESERVATION SERVICES",
    "salary": 72593.0769,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 60676.9231,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 59410.2804,
    "count": 107,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 58368.9655,
    "count": 87,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 53231.4286,
    "count": 28,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 37986.155,
    "count": 684,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 49476,
    "count": 100,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 43400,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 42510.9091,
    "count": 55,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 36650,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 36514.9638,
    "count": 276,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 23791.6995,
    "count": 1471,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 45726.3636,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 40822.093,
    "count": 86,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 35845.7143,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 34008.9024,
    "count": 82,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 32596,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "",
    "salary": 25961.4312,
    "count": 552,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 43025,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 36200,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 35514.2857,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 34551.7241,
    "count": 87,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 27430.2083,
    "count": 48,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18552.5279,
    "count": 269,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 32045.6897,
    "count": 58,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 15620.4598,
    "count": 174,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 8560,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45049.6296,
    "count": 486,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 72026.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 66792,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 59760,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 55023.5294,
    "count": 68,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 45469.1892,
    "count": 74,
    "rank": 5
  },
  {
    "state": "Mississippi",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 53210.1563,
    "count": 128,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 61072.1519,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 46327.2727,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 31426.087,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 41874.5364,
    "count": 302,
    "rank": 0
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 62923.0769,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 62282.3529,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 55053.3333,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 42731.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Mississippi",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS NONDURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 40680,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 37540.4608,
    "count": 217,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 53264,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 38869.5413,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 31791.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 30000,
    "count": 66,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Construction",
    "industry": "",
    "salary": 42788.8009,
    "count": 884,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 42788.8009,
    "count": 884,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34330.6421,
    "count": 1682,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 35743.55,
    "count": 600,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 34275.1126,
    "count": 1021,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 19800.3571,
    "count": 56,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 17654.5261,
    "count": 1129,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 41523.2558,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 27171.3559,
    "count": 59,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 19837.9793,
    "count": 193,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 18461.4141,
    "count": 99,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 16623.6364,
    "count": 22,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "",
    "salary": 60189.1233,
    "count": 1095,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 99681.3433,
    "count": 134,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 80497.2477,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "AUTOMOTIVE EQUIPMENT RENTAL AND LEASING",
    "salary": 71787.5,
    "count": 24,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 59136.6772,
    "count": 316,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 58841.6667,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 43649.6441,
    "count": 2023,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 69179.1045,
    "count": 67,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 68252.1429,
    "count": 140,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 55400,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 52219.1057,
    "count": 861,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 49403.1746,
    "count": 126,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "",
    "salary": 49467.4457,
    "count": 368,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 67584.2697,
    "count": 89,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 64474.0385,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 59814.2857,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 49956.25,
    "count": 48,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 44778.8462,
    "count": 52,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 50501.5986,
    "count": 2033,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL CHEMICALS",
    "salary": 91653.8462,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 87242.4242,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 83429.0909,
    "count": 55,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 83226.9231,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 81321.9512,
    "count": 41,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Military",
    "industry": "",
    "salary": 28076.8212,
    "count": 151,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 30297.3684,
    "count": 76,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 30168,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Military",
    "industry": "MILITARY RESERVES OR NATIONAL GUARD",
    "salary": 13374.359,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Mining",
    "industry": "",
    "salary": 74769.7674,
    "count": 43,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 127209.0909,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 40659.0909,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 51262.6471,
    "count": 1462,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 89414.0625,
    "count": 128,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 77581.4815,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 75783.4868,
    "count": 152,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 67892.6554,
    "count": 177,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 62096.4029,
    "count": 139,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 44243.8214,
    "count": 840,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 55082.7586,
    "count": 87,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 51056.1644,
    "count": 73,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 45037.1429,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 43528.9256,
    "count": 121,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 42433.0321,
    "count": 343,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29804.9348,
    "count": 1686,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 51950,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 48212.7523,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 43230.4348,
    "count": 46,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 42721.3077,
    "count": 130,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 39488.8889,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "",
    "salary": 28772.4613,
    "count": 711,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 43868.4211,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 42426.3158,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 38663,
    "count": 80,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "DRYCLEANING AND LAUNDRY SERVICES",
    "salary": 38538.0952,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 35340.4225,
    "count": 142,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20995.5385,
    "count": 325,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26537.6712,
    "count": 146,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17335.1111,
    "count": 45,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 16296.3866,
    "count": 119,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 15313.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45785.0657,
    "count": 685,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 63636.3636,
    "count": 44,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 63405.7971,
    "count": 69,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 51250,
    "count": 50,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 46541.5094,
    "count": 53,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 44997.686,
    "count": 121,
    "rank": 5
  },
  {
    "state": "Missouri",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 62955.2239,
    "count": 201,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 75736.3636,
    "count": 121,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 51459.0909,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 38593.5484,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 37412.5,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 48969.3133,
    "count": 466,
    "rank": 0
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 74548.3871,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 72676,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "FARM SUPPLIES MERCHANT WHOLESALERS",
    "salary": 69264.2857,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "PAPER AND PAPER PRODUCTS MERCHANT WHOLESALERS",
    "salary": 65384.6154,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Missouri",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 57666.6667,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 34725.4206,
    "count": 214,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 50510.5263,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 35301.1024,
    "count": 127,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 28630.6122,
    "count": 49,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Construction",
    "industry": "",
    "salary": 41017.663,
    "count": 184,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 41017.663,
    "count": 184,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 31924.0283,
    "count": 283,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33305.4974,
    "count": 191,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 29531.5476,
    "count": 84,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 17175.748,
    "count": 254,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 24542.8571,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 17316.6667,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 16601.3208,
    "count": 53,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 16192.56,
    "count": 125,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Finance",
    "industry": "",
    "salary": 46100.146,
    "count": 137,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 49626.8421,
    "count": 38,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 45116.129,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 41887.1795,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 44902.918,
    "count": 305,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 115605.8824,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 52386.8874,
    "count": 151,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 39834.375,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "NURSING CARE FACILITIES (SKILLED NURSING FACILITIES)",
    "salary": 25635.7143,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Health Care",
    "industry": "HOME HEALTH CARE SERVICES",
    "salary": 20161.7647,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Information",
    "industry": "",
    "salary": 37688.2353,
    "count": 51,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 51681.8182,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 19957.1429,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 43961.5044,
    "count": 113,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Manufacturing",
    "industry": "SAWMILLS AND WOOD PRESERVATION",
    "salary": 41514.2857,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Military",
    "industry": "",
    "salary": 37583.3333,
    "count": 24,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 39437.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Mining",
    "industry": "",
    "salary": 66659.2593,
    "count": 54,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 76354.5455,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 68406.25,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 42426.9663,
    "count": 178,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 66333.3333,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 58680,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 52041.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 51750,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Professional Services",
    "industry": "ACCOUNTING, TAX PREPARATION, BOOKKEEPING, AND PAYROLL SERVICES",
    "salary": 39930,
    "count": 20,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 40568.5922,
    "count": 206,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 63565.2174,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 52770.8696,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 49575,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 42350,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 40695.4545,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29167.9924,
    "count": 264,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 50048,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 37425,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 24164.1026,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "GROCERY STORES",
    "salary": 20648,
    "count": 50,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Retail Trade",
    "industry": "GASOLINE STATIONS",
    "salary": 19009.0909,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Services",
    "industry": "",
    "salary": 27248.5714,
    "count": 119,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 32260,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 25213.1034,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 25000,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20107.766,
    "count": 94,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26505.5556,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 13871.2,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 13705,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 48883.7607,
    "count": 117,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 62878.9474,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 45591.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 38372.973,
    "count": 37,
    "rank": 3
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 35185.1852,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Montana",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 15275,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Montana",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 53642.5,
    "count": 40,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 59627.2727,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Montana",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 28927.2727,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Montana",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46212.963,
    "count": 54,
    "rank": 0
  },
  {
    "state": "Montana",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 30207.6923,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 38562.377,
    "count": 244,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 42916.0317,
    "count": 126,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 36005.5556,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 33385.567,
    "count": 97,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Construction",
    "industry": "",
    "salary": 40457.6994,
    "count": 326,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 40457.6994,
    "count": 326,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35994.5111,
    "count": 583,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 36756.5041,
    "count": 369,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 36062.8205,
    "count": 195,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 18577.7778,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 16452.6744,
    "count": 344,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 29230.7692,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 17771.4286,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 17025.8065,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 16763.1892,
    "count": 185,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 14700.7353,
    "count": 68,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56886.9393,
    "count": 379,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 82927.907,
    "count": 43,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 59608.8235,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 57876.8519,
    "count": 108,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 56477.5362,
    "count": 138,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 37996.6667,
    "count": 45,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 42479.1111,
    "count": 630,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 77453.1915,
    "count": 47,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 51066.6667,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 50068.4825,
    "count": 257,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 48949.7368,
    "count": 38,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 38929.2308,
    "count": 65,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Information",
    "industry": "",
    "salary": 42335.4762,
    "count": 84,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 54706.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 46805.8824,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 27498.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 45432.4598,
    "count": 622,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "FRUIT AND VEGETABLE PRESERVING AND SPECIALTY FOODS",
    "salary": 75960,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "IRON AND STEEL MILLS AND STEEL PRODUCTS",
    "salary": 67736.3636,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "ANIMAL FOOD, GRAIN AND OILSEED MILLING",
    "salary": 67246.875,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "CEMENT, CONCRETE, LIME, AND GYPSUM PRODUCTS",
    "salary": 59413.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL IMPLEMENTS",
    "salary": 53556.8627,
    "count": 51,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Military",
    "industry": "",
    "salary": 53735.7143,
    "count": 42,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 49882.8571,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Mining",
    "industry": "",
    "salary": 25600,
    "count": 14,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 49531.0896,
    "count": 413,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 84612.9032,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 75773.2143,
    "count": 56,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 63044.8276,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 62595.2381,
    "count": 42,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Professional Services",
    "industry": "VETERINARY SERVICES",
    "salary": 45460,
    "count": 25,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 46734.9315,
    "count": 292,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 66408.5714,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 58000,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 54717.8571,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 45583.3333,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 44719.8276,
    "count": 116,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 26754.9404,
    "count": 587,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 44550,
    "count": 46,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 39270,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 29788.8889,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "FURNITURE AND HOME FURNISHINGS STORES",
    "salary": 29662.5,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 29638.4211,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "",
    "salary": 28673.5556,
    "count": 225,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 37044.1176,
    "count": 34,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 36590.9091,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 33233.3333,
    "count": 24,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 31334.6154,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 28820.3846,
    "count": 52,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20874.8276,
    "count": 116,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 25280.3922,
    "count": 51,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 15163.4043,
    "count": 47,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 50262.4648,
    "count": 284,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 74254.7619,
    "count": 84,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 55364.2857,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 45402.875,
    "count": 80,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 38985.7143,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Nebraska",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 36975,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Nebraska",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 64916.0494,
    "count": 81,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 73912.5,
    "count": 48,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 39414.2857,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 45133.5664,
    "count": 143,
    "rank": 0
  },
  {
    "state": "Nebraska",
    "industry_type": "Wholesale Trade",
    "industry": "FARM PRODUCT RAW MATERIAL MERCHANT WHOLESALERS",
    "salary": 45716.129,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Nebraska",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 41728,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Nebraska",
    "industry_type": "Wholesale Trade",
    "industry": "FARM SUPPLIES MERCHANT WHOLESALERS",
    "salary": 40975,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Nebraska",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 37741.1765,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 28783.4043,
    "count": 47,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 35185,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 20142.381,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Construction",
    "industry": "",
    "salary": 47609.3923,
    "count": 362,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 47609.3923,
    "count": 362,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 41795.9659,
    "count": 528,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 45663.964,
    "count": 111,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 41362.9008,
    "count": 393,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 33665.625,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 35908.8444,
    "count": 1523,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 51662.2951,
    "count": 61,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 45275,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 38097.893,
    "count": 617,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 36219.0947,
    "count": 486,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 28723.8535,
    "count": 314,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56840.9669,
    "count": 393,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 122704,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 59196.1538,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 58876.8293,
    "count": 82,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 51712.766,
    "count": 141,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 49630.6452,
    "count": 62,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 62011.0239,
    "count": 586,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 76235.4839,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 74585.9375,
    "count": 64,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 71632.6563,
    "count": 256,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 57093.617,
    "count": 47,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48971,
    "count": 70,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "",
    "salary": 56295.812,
    "count": 117,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 67831.8182,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 60100,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 57725.8065,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 51137.5,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 38063.6364,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 58559.2179,
    "count": 358,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 125635.2941,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 85838.4615,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 84206.25,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "SPORTING AND ATHLETIC GOODS, AND DOLL, TOY, AND GAME MANUFACTURING",
    "salary": 74808.3333,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Manufacturing",
    "industry": "MISCELLANEOUS MANUFACTURING, N.E.C.",
    "salary": 59120.5128,
    "count": 39,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Military",
    "industry": "",
    "salary": 53153.3333,
    "count": 60,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 54270,
    "count": 50,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Mining",
    "industry": "",
    "salary": 81935.4167,
    "count": 96,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 81785.8974,
    "count": 78,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 56563.9894,
    "count": 757,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 114423.9437,
    "count": 71,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 80550.8197,
    "count": 61,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 79407.8947,
    "count": 76,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "SPECIALIZED DESIGN SERVICES",
    "salary": 76000,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 75888,
    "count": 50,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 57293.1422,
    "count": 436,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 76904.7619,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 63808.3333,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 60354.3784,
    "count": 185,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 54686.0563,
    "count": 71,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 53536.3636,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 37175.7692,
    "count": 650,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 72343.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS RETAIL STORES",
    "salary": 54366.0526,
    "count": 38,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 53421.875,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 52765.5172,
    "count": 58,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 49000,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "",
    "salary": 34140.5603,
    "count": 232,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46383.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "NAIL SALONS AND OTHER PERSONAL CARE SERVICES",
    "salary": 45400,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 40852.7778,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 40524,
    "count": 25,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 34758.5714,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 27716.875,
    "count": 96,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 33633.3333,
    "count": 54,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17414.6154,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 47733.3333,
    "count": 333,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 81588.3333,
    "count": 54,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 48976.5385,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 46145.4545,
    "count": 55,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 44413.5135,
    "count": 37,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 43123.2143,
    "count": 56,
    "rank": 5
  },
  {
    "state": "Nevada",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 75956.1194,
    "count": 67,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 79215.8621,
    "count": 29,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 69823.5294,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 61392.8105,
    "count": 153,
    "rank": 0
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 107916.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 79686.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 71407.6923,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 63463.6364,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Nevada",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 45996.7742,
    "count": 31,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 26730.303,
    "count": 33,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 19828.5714,
    "count": 14,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Construction",
    "industry": "",
    "salary": 54122.335,
    "count": 197,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 54122.335,
    "count": 197,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37694.7992,
    "count": 523,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 39362.7687,
    "count": 307,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 36784.6667,
    "count": 195,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 19210.5263,
    "count": 19,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19674.2657,
    "count": 286,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 35687.5,
    "count": 32,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 21972.7273,
    "count": 11,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 17834.3421,
    "count": 76,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 17121.8243,
    "count": 148,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "",
    "salary": 62281.3559,
    "count": 236,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 81814.6341,
    "count": 41,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 75894.1176,
    "count": 17,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 60285.2747,
    "count": 91,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 54510.2326,
    "count": 43,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 53956.25,
    "count": 32,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 52779.6145,
    "count": 441,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 76009.0909,
    "count": 22,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 68966.6667,
    "count": 30,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 61485.2217,
    "count": 203,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 48000,
    "count": 24,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Health Care",
    "industry": "HOME HEALTH CARE SERVICES",
    "salary": 41618.2143,
    "count": 28,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Information",
    "industry": "",
    "salary": 73014.2045,
    "count": 88,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 105067.1429,
    "count": 14,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 93490,
    "count": 20,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 62323.5294,
    "count": 17,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 64487.671,
    "count": 541,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 121915.3846,
    "count": 13,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 107200,
    "count": 22,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 88732.6087,
    "count": 46,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 79651.6129,
    "count": 31,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 78730.7692,
    "count": 13,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 70120.2406,
    "count": 374,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 94027.5,
    "count": 20,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 91717.3077,
    "count": 52,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 88379.2208,
    "count": 77,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 85597.2222,
    "count": 36,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 78890.9091,
    "count": 33,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 51317.6087,
    "count": 184,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 67747.3684,
    "count": 19,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 65807.6923,
    "count": 13,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 57108.806,
    "count": 67,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 48690,
    "count": 20,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 33451.0204,
    "count": 49,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 34802.1853,
    "count": 421,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 83077.7778,
    "count": 27,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 65576.4706,
    "count": 17,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 46665,
    "count": 50,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "HARDWARE STORES",
    "salary": 45085.7143,
    "count": 14,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Retail Trade",
    "industry": "CLOTHING STORES",
    "salary": 33685.7143,
    "count": 21,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Services",
    "industry": "",
    "salary": 32060.3704,
    "count": 135,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 37337.5,
    "count": 40,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 33375,
    "count": 20,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Services",
    "industry": "BEAUTY SALONS",
    "salary": 22272.7273,
    "count": 11,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 20115.9091,
    "count": 22,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 24903.4831,
    "count": 89,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26481.3333,
    "count": 45,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 24450,
    "count": 31,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 53537.1901,
    "count": 121,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 80533.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 69781.8182,
    "count": 11,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 60200,
    "count": 16,
    "rank": 3
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 51414.8148,
    "count": 27,
    "rank": 4
  },
  {
    "state": "New Hampshire",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 40348.2759,
    "count": 29,
    "rank": 5
  },
  {
    "state": "New Hampshire",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 63766.6667,
    "count": 54,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 63112.5,
    "count": 32,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 50446.1538,
    "count": 13,
    "rank": 2
  },
  {
    "state": "New Hampshire",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 74298.0769,
    "count": 104,
    "rank": 0
  },
  {
    "state": "New Hampshire",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 112384.6154,
    "count": 13,
    "rank": 1
  },
  {
    "state": "New Hampshire",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 74986.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24212.8205,
    "count": 78,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 42630.7692,
    "count": 13,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 20088.5246,
    "count": 61,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Construction",
    "industry": "",
    "salary": 58746.4568,
    "count": 1064,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 58746.4568,
    "count": 1064,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 53175.3558,
    "count": 2614,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 54101.3178,
    "count": 129,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 53825.7098,
    "count": 641,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 53122.7273,
    "count": 22,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 52881.6301,
    "count": 1822,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 34998.7183,
    "count": 1342,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 62945.5882,
    "count": 102,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 52827.9208,
    "count": 202,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 31878.9474,
    "count": 38,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 31606.1329,
    "count": 331,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 27892.6115,
    "count": 628,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "",
    "salary": 112502.6503,
    "count": 2113,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 171520.4204,
    "count": 452,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 118776.0081,
    "count": 496,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 113859.023,
    "count": 174,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 103190.2394,
    "count": 543,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 66304.3478,
    "count": 23,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 65512.1898,
    "count": 2498,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 85380.7122,
    "count": 337,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 75130.6452,
    "count": 124,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 73458.2638,
    "count": 1054,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 64471.8617,
    "count": 188,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 60868.7075,
    "count": 147,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "",
    "salary": 96400.9192,
    "count": 718,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 154181.8182,
    "count": 22,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 121857.1429,
    "count": 14,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 115648.2301,
    "count": 113,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 107567.6471,
    "count": 170,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 105290.9091,
    "count": 88,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 86903.7224,
    "count": 2082,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 133974.0053,
    "count": 377,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 125906.25,
    "count": 16,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 125222.2222,
    "count": 27,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 108733.9623,
    "count": 53,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Manufacturing",
    "industry": "SUGAR AND CONFECTIONERY PRODUCTS",
    "salary": 108133.3333,
    "count": 15,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Military",
    "industry": "",
    "salary": 48018.5185,
    "count": 81,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 43605.6604,
    "count": 53,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Mining",
    "industry": "",
    "salary": 77652.6316,
    "count": 19,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 84778.0643,
    "count": 2986,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 114764.5968,
    "count": 124,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 114035.8974,
    "count": 117,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 109808.5714,
    "count": 35,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 106375.7098,
    "count": 317,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 105458.5294,
    "count": 374,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 70206.8837,
    "count": 1290,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 79813.1111,
    "count": 45,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 79245.9854,
    "count": 137,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 73479.0909,
    "count": 110,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 73459.1362,
    "count": 602,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 72270.1754,
    "count": 57,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 48060.2752,
    "count": 1962,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 122316.6667,
    "count": 18,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 85560.6061,
    "count": 99,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 78612.5,
    "count": 16,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "OTHER DIRECT SELLING ESTABLISHMENTS",
    "salary": 73825,
    "count": 12,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 70084.6528,
    "count": 144,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "",
    "salary": 43515.0822,
    "count": 852,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 93883.7931,
    "count": 29,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 88546.1538,
    "count": 13,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 80446.7742,
    "count": 31,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 64036.9231,
    "count": 13,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 60125.283,
    "count": 106,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 35690.3546,
    "count": 423,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 48016.4286,
    "count": 28,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 41465.1185,
    "count": 211,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 38854.5455,
    "count": 11,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 26450.9827,
    "count": 173,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 54800.6548,
    "count": 1069,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 109142.8571,
    "count": 21,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 77020,
    "count": 30,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 76605.2593,
    "count": 135,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 61036.8421,
    "count": 57,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 60880.7947,
    "count": 151,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 91091.0448,
    "count": 201,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 111163.8889,
    "count": 36,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 99417.4419,
    "count": 86,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 76836.6667,
    "count": 30,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 72859.0909,
    "count": 22,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 64980,
    "count": 25,
    "rank": 5
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 78373.7246,
    "count": 835,
    "rank": 0
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 114214.2857,
    "count": 14,
    "rank": 1
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 111189.4737,
    "count": 38,
    "rank": 2
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 104152.9412,
    "count": 119,
    "rank": 3
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 97077.4545,
    "count": 55,
    "rank": 4
  },
  {
    "state": "New Jersey",
    "industry_type": "Wholesale Trade",
    "industry": "APPAREL, PIECE GOODS, AND NOTIONS MERCHANT WHOLESALERS",
    "salary": 92112,
    "count": 50,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 30680.3261,
    "count": 92,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 72076.9231,
    "count": 13,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 29587.5,
    "count": 32,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 16862.8947,
    "count": 38,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Construction",
    "industry": "",
    "salary": 35360.2837,
    "count": 282,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 35360.2837,
    "count": 282,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37025.707,
    "count": 587,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 44164.1667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 38622.6804,
    "count": 194,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35631.3859,
    "count": 368,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19208.1068,
    "count": 412,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 28533.9286,
    "count": 28,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 20258.0645,
    "count": 62,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 19529.8734,
    "count": 79,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 18077.6056,
    "count": 213,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 17847.619,
    "count": 21,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Finance",
    "industry": "",
    "salary": 50606.4456,
    "count": 193,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 53072.549,
    "count": 51,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 45993.0233,
    "count": 43,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 39738.4615,
    "count": 13,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 36898.9818,
    "count": 55,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 48074.0762,
    "count": 525,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 66358.3333,
    "count": 36,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 62603.4483,
    "count": 29,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 58423.8095,
    "count": 42,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 57630.1435,
    "count": 209,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 44786.3636,
    "count": 33,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Information",
    "industry": "",
    "salary": 41970.7018,
    "count": 57,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 51545.4545,
    "count": 11,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 44166.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 54042.2414,
    "count": 232,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 94895.2381,
    "count": 21,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 71077.7778,
    "count": 27,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Manufacturing",
    "industry": "MISCELLANEOUS MANUFACTURING, N.E.C.",
    "salary": 42666.6667,
    "count": 18,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Military",
    "industry": "",
    "salary": 38198.7013,
    "count": 77,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 38970.4918,
    "count": 61,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 34540,
    "count": 15,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Mining",
    "industry": "",
    "salary": 66280.9677,
    "count": 93,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 64598.4848,
    "count": 66,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 60799.7652,
    "count": 511,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 86527.5168,
    "count": 149,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 83344.7368,
    "count": 38,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 77256.6667,
    "count": 30,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 59397.2973,
    "count": 37,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 56334.8485,
    "count": 66,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 48074.9886,
    "count": 437,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 60264.8649,
    "count": 37,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 57679.4521,
    "count": 73,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 55940,
    "count": 49,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 54936.6667,
    "count": 30,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 44075.0735,
    "count": 136,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29821.198,
    "count": 409,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 48905.5556,
    "count": 18,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 42803.5484,
    "count": 31,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS RETAIL STORES",
    "salary": 39760,
    "count": 20,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "FURNITURE AND HOME FURNISHINGS STORES",
    "salary": 33145.4545,
    "count": 11,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 32911.6667,
    "count": 18,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "",
    "salary": 27248.7685,
    "count": 203,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 32839,
    "count": 30,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 30454.5455,
    "count": 44,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 26240,
    "count": 12,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 19857.7778,
    "count": 45,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Services",
    "industry": "PRIVATE HOUSEHOLDS",
    "salary": 17486.6667,
    "count": 15,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 27186.4602,
    "count": 113,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 30633.3333,
    "count": 24,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 27881,
    "count": 70,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21684.6154,
    "count": 13,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 49119.375,
    "count": 160,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 59641.6667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 58893.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 58812.5,
    "count": 16,
    "rank": 3
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 48959.5745,
    "count": 47,
    "rank": 4
  },
  {
    "state": "New Mexico",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 42888.8889,
    "count": 18,
    "rank": 5
  },
  {
    "state": "New Mexico",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 70301.7857,
    "count": 56,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 75532.2581,
    "count": 31,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46085.0575,
    "count": 87,
    "rank": 0
  },
  {
    "state": "New Mexico",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 58281.8182,
    "count": 11,
    "rank": 1
  },
  {
    "state": "New Mexico",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 43322.2222,
    "count": 18,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 28721.641,
    "count": 312,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 29664.2857,
    "count": 14,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 29564.3478,
    "count": 23,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 28948.2112,
    "count": 161,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 27421.9091,
    "count": 110,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Construction",
    "industry": "",
    "salary": 53276.9064,
    "count": 2350,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 53276.9064,
    "count": 2350,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 47792.7574,
    "count": 6665,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 51246.2803,
    "count": 4089,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 43186.6703,
    "count": 2229,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 43144.7273,
    "count": 55,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 35467.9452,
    "count": 292,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 27006.1727,
    "count": 4029,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 59926.7925,
    "count": 318,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 39570.8434,
    "count": 249,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 36739.5294,
    "count": 425,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 28077.6923,
    "count": 52,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 21861.6183,
    "count": 2206,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "",
    "salary": 105790.4436,
    "count": 4238,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 175137.5652,
    "count": 920,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 154587.7778,
    "count": 270,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 106870.4932,
    "count": 953,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 76755.695,
    "count": 964,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 70979.0476,
    "count": 21,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 58093.1447,
    "count": 6360,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 88121.9139,
    "count": 627,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "OFFICES OF CHIROPRACTORS",
    "salary": 69986.9565,
    "count": 23,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 67860.2039,
    "count": 2796,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 61737.5192,
    "count": 391,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 59542.4254,
    "count": 268,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "",
    "salary": 78591.6993,
    "count": 1483,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 126197.6744,
    "count": 43,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 109107.6923,
    "count": 26,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 107471.7391,
    "count": 276,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 105663.6364,
    "count": 22,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 85366.4655,
    "count": 116,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 59535.5694,
    "count": 3934,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 104910.625,
    "count": 160,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "CLAY BUILDING MATERIAL AND REFRACTORIES",
    "salary": 97441.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "HOUSEHOLD APPLIANCES",
    "salary": 92207.6923,
    "count": 13,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 90367.5676,
    "count": 74,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Manufacturing",
    "industry": "SOAP, CLEANING COMPOUND, AND COSMETICS",
    "salary": 85956.8966,
    "count": 58,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Military",
    "industry": "",
    "salary": 36694.2,
    "count": 250,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 55941.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 54566.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 34534.5771,
    "count": 201,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Mining",
    "industry": "",
    "salary": 47005.7692,
    "count": 52,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 56728.5714,
    "count": 21,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 40815.3846,
    "count": 26,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 74099.5749,
    "count": 5528,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 109765.6994,
    "count": 865,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 107999.1808,
    "count": 354,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 103950,
    "count": 48,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 98424.2589,
    "count": 479,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 93675.2425,
    "count": 536,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 64455.6077,
    "count": 2896,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 71663.012,
    "count": 166,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 71259.434,
    "count": 212,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 70788.1905,
    "count": 210,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 70575.5491,
    "count": 1375,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 65000,
    "count": 80,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 39389.0343,
    "count": 4173,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "OTHER DIRECT SELLING ESTABLISHMENTS",
    "salary": 148484.1667,
    "count": 48,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 61803.3333,
    "count": 30,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 58712.7907,
    "count": 43,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 58119.5122,
    "count": 123,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 57539.8795,
    "count": 249,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "",
    "salary": 34959.664,
    "count": 2113,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 69342.8571,
    "count": 70,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 58935.3448,
    "count": 58,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 50935.6364,
    "count": 55,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 46441.4181,
    "count": 409,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 43529.6992,
    "count": 266,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 32691.2431,
    "count": 1588,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 39062.7081,
    "count": 949,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 29305.9813,
    "count": 107,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 22326.3088,
    "count": 408,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 20954.1129,
    "count": 124,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 48407.6585,
    "count": 2050,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 72674.1758,
    "count": 91,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 67662.8571,
    "count": 126,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 51664.2319,
    "count": 345,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 49627.234,
    "count": 235,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 49502.0137,
    "count": 586,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 76975.4571,
    "count": 350,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 94923.0769,
    "count": 26,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 82779.9163,
    "count": 239,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 64623.5294,
    "count": 17,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "NOT SPECIFIED UTILITIES",
    "salary": 56936.3636,
    "count": 11,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 56825,
    "count": 28,
    "rank": 5
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 66131.5625,
    "count": 1248,
    "rank": 0
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 101316.8317,
    "count": 101,
    "rank": 1
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 87350.8197,
    "count": 61,
    "rank": 2
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "APPAREL, PIECE GOODS, AND NOTIONS MERCHANT WHOLESALERS",
    "salary": 86516.4423,
    "count": 104,
    "rank": 3
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 85644.2308,
    "count": 52,
    "rank": 4
  },
  {
    "state": "New York",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 71676.4706,
    "count": 119,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 38137.048,
    "count": 229,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 71690.4762,
    "count": 21,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 41750,
    "count": 24,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 35077.0642,
    "count": 109,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 30126.3125,
    "count": 64,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Construction",
    "industry": "",
    "salary": 40414.7082,
    "count": 1251,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 40414.7082,
    "count": 1251,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35731.9684,
    "count": 2784,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 44800,
    "count": 15,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42326.1836,
    "count": 1111,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 31339.0275,
    "count": 1563,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 29458,
    "count": 95,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 20218.6395,
    "count": 1911,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 41523.1313,
    "count": 99,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 30530.3797,
    "count": 79,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 24995.6425,
    "count": 179,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 18355.1523,
    "count": 1182,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 18174.8601,
    "count": 286,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "",
    "salary": 67364.6127,
    "count": 1743,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 104155.4974,
    "count": 191,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 78136.3401,
    "count": 541,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 68838.4615,
    "count": 13,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 63215.6499,
    "count": 377,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 62651.5873,
    "count": 126,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 51784.2178,
    "count": 3094,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 78793.8983,
    "count": 295,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 75983.3333,
    "count": 24,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 73690.8955,
    "count": 134,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 58142.807,
    "count": 228,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 57745.4989,
    "count": 1313,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "",
    "salary": 60825.1111,
    "count": 495,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 120066.6667,
    "count": 30,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 85050,
    "count": 18,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 68420.339,
    "count": 118,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 61490.2439,
    "count": 41,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 59941.1765,
    "count": 102,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 54739.1235,
    "count": 3377,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 102586.3636,
    "count": 44,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "METALWORKING MACHINERY",
    "salary": 90841.1765,
    "count": 17,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 84015.3846,
    "count": 26,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 81387.0056,
    "count": 177,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Manufacturing",
    "industry": "PAPERBOARD CONTAINER",
    "salary": 79263.3333,
    "count": 30,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "",
    "salary": 38217.1498,
    "count": 828,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 63361.5385,
    "count": 13,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 45495.122,
    "count": 41,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 42717.9837,
    "count": 367,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 37742.1053,
    "count": 38,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 31460.7242,
    "count": 359,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Mining",
    "industry": "",
    "salary": 76675,
    "count": 28,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 59131.8182,
    "count": 22,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 58583.7598,
    "count": 2548,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 92245.7143,
    "count": 35,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 90389.5272,
    "count": 423,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 85135.6784,
    "count": 199,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 82580.2632,
    "count": 152,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 75637.037,
    "count": 243,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 47229.1571,
    "count": 1324,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 66421.5686,
    "count": 51,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 59904.5198,
    "count": 177,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 55347.619,
    "count": 42,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 52998.7261,
    "count": 157,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 49706.3636,
    "count": 110,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 32717.3155,
    "count": 2574,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 88500,
    "count": 17,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 69987.7778,
    "count": 90,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "JEWELRY, LUGGAGE, AND LEATHER GOODS STORES",
    "salary": 48858.5714,
    "count": 21,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 48431.2121,
    "count": 198,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Retail Trade",
    "industry": "NOT SPECIFIED RETAIL TRADE",
    "salary": 43422.4194,
    "count": 62,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "",
    "salary": 31812.1525,
    "count": 1036,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 70688.4615,
    "count": 26,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46304.3478,
    "count": 23,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 42238.0488,
    "count": 41,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 38569.9194,
    "count": 124,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 35616.2162,
    "count": 37,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 23642.6014,
    "count": 592,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 33352.381,
    "count": 21,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 28981.8051,
    "count": 277,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 19023.6842,
    "count": 38,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 17754.5313,
    "count": 256,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44115.8137,
    "count": 848,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 60641.1765,
    "count": 17,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 52723.4483,
    "count": 145,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 48060.2128,
    "count": 94,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 46358,
    "count": 100,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 45600.1852,
    "count": 108,
    "rank": 5
  },
  {
    "state": "North Carolina",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 69448.7547,
    "count": 265,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 82145.8101,
    "count": 179,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 48442.8571,
    "count": 21,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 42354.5455,
    "count": 22,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 39397.4194,
    "count": 31,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 56654.3927,
    "count": 708,
    "rank": 0
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 86980,
    "count": 15,
    "rank": 1
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 83465,
    "count": 40,
    "rank": 2
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 75825.5319,
    "count": 47,
    "rank": 3
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 70081.8182,
    "count": 11,
    "rank": 4
  },
  {
    "state": "North Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 65405.4118,
    "count": 85,
    "rank": 5
  },
  {
    "state": "North Dakota",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 36259.92,
    "count": 125,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 38515.1087,
    "count": 92,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 31954.1667,
    "count": 24,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Construction",
    "industry": "",
    "salary": 45315.6863,
    "count": 153,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 45315.6863,
    "count": 153,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34945.084,
    "count": 238,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39379.7143,
    "count": 70,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33154.908,
    "count": 163,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 12109.7297,
    "count": 148,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 15716.6667,
    "count": 30,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 15008.3333,
    "count": 12,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 11330.9091,
    "count": 77,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 11213.5294,
    "count": 17,
    "rank": 4
  },
  {
    "state": "North Dakota",
    "industry_type": "Finance",
    "industry": "",
    "salary": 45737.2727,
    "count": 110,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 38683.7209,
    "count": 43,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 36120,
    "count": 30,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 46104.3775,
    "count": 249,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 138945.4545,
    "count": 11,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 67016.6667,
    "count": 18,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 52733.3333,
    "count": 99,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 33684.6154,
    "count": 13,
    "rank": 4
  },
  {
    "state": "North Dakota",
    "industry_type": "Health Care",
    "industry": "RESIDENTIAL CARE FACILITIES, EXCEPT SKILLED NURSING FACILITIES",
    "salary": 26645.4545,
    "count": 22,
    "rank": 5
  },
  {
    "state": "North Dakota",
    "industry_type": "Information",
    "industry": "",
    "salary": 36217.9487,
    "count": 39,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 43476.0947,
    "count": 169,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Manufacturing",
    "industry": "CONSTRUCTION, AND MINING AND OIL AND GAS FIELD MACHINERY",
    "salary": 53277.7778,
    "count": 27,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Manufacturing",
    "industry": "AGRICULTURAL IMPLEMENTS",
    "salary": 50100,
    "count": 19,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Manufacturing",
    "industry": "SUGAR AND CONFECTIONERY PRODUCTS",
    "salary": 43208.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Military",
    "industry": "",
    "salary": 32992.3077,
    "count": 39,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 33734.2857,
    "count": 35,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Mining",
    "industry": "",
    "salary": 86264.5161,
    "count": 62,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 90357.1429,
    "count": 42,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 62866.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 52379.7656,
    "count": 128,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 88207.6923,
    "count": 26,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 65307.6923,
    "count": 13,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Professional Services",
    "industry": "SERVICES TO BUILDINGS AND DWELLINGS, EX CONSTR CLN",
    "salary": 22042.8571,
    "count": 14,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 44868.843,
    "count": 121,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 62082.1429,
    "count": 28,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 39250.5882,
    "count": 34,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 34837.9167,
    "count": 24,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 32651.0952,
    "count": 210,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 56111.7647,
    "count": 17,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 45100,
    "count": 18,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "GASOLINE STATIONS",
    "salary": 33077.7778,
    "count": 18,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 32242.8571,
    "count": 21,
    "rank": 4
  },
  {
    "state": "North Dakota",
    "industry_type": "Retail Trade",
    "industry": "GROCERY STORES",
    "salary": 27027.5862,
    "count": 29,
    "rank": 5
  },
  {
    "state": "North Dakota",
    "industry_type": "Services",
    "industry": "",
    "salary": 34278.0822,
    "count": 73,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 50213.6364,
    "count": 22,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 25352.6316,
    "count": 19,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18565.3846,
    "count": 52,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 21520.8333,
    "count": 24,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 13389.4737,
    "count": 19,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 43269.5652,
    "count": 92,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 66792.3077,
    "count": 13,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 42073.5294,
    "count": 34,
    "rank": 2
  },
  {
    "state": "North Dakota",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 39272.2222,
    "count": 18,
    "rank": 3
  },
  {
    "state": "North Dakota",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 61863.5897,
    "count": 39,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 81772.7273,
    "count": 22,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 48807.3529,
    "count": 68,
    "rank": 0
  },
  {
    "state": "North Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "FARM PRODUCT RAW MATERIAL MERCHANT WHOLESALERS",
    "salary": 62719.0476,
    "count": 21,
    "rank": 1
  },
  {
    "state": "North Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 45313.3333,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 36440.0532,
    "count": 188,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 35038.0952,
    "count": 42,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 34117.04,
    "count": 125,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Construction",
    "industry": "",
    "salary": 40997.968,
    "count": 1437,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 40997.968,
    "count": 1437,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 38719.0823,
    "count": 3182,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 39696.0921,
    "count": 1781,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 37933.6138,
    "count": 1248,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 34669.3496,
    "count": 123,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 29996.6667,
    "count": 30,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 17680.6439,
    "count": 2398,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 28624.1748,
    "count": 103,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 24816.6667,
    "count": 111,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 23396.8116,
    "count": 138,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 17153.7469,
    "count": 1525,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 14567.7389,
    "count": 429,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "",
    "salary": 61449.5429,
    "count": 1960,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 88562.2222,
    "count": 180,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 66969.8669,
    "count": 526,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 63946.719,
    "count": 637,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 62585.8333,
    "count": 120,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Finance",
    "industry": "OTHER CONSUMER GOODS RENTAL",
    "salary": 49805.5556,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 48439.7872,
    "count": 4135,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 73264.6945,
    "count": 311,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 57525.8833,
    "count": 1851,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 57233.3333,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 56982.0513,
    "count": 156,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 52009.2437,
    "count": 238,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "",
    "salary": 49963.7248,
    "count": 596,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 111300,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "PERIODICAL, BOOK, AND DIRECTORY PUBLISHERS",
    "salary": 68080.5556,
    "count": 72,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 62452.233,
    "count": 103,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 60000,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 57843.1373,
    "count": 51,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 54416.1264,
    "count": 5349,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "SOAP, CLEANING COMPOUND, AND COSMETICS",
    "salary": 91344.1739,
    "count": 115,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 87600,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 86572.549,
    "count": 51,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "CLAY BUILDING MATERIAL AND REFRACTORIES",
    "salary": 81487.5,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 79368.9928,
    "count": 139,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Military",
    "industry": "",
    "salary": 52806.1538,
    "count": 65,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 59296.9697,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 48571.4286,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Mining",
    "industry": "",
    "salary": 59772.3577,
    "count": 123,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 68268.8889,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 52750,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 46938.7097,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 50396.2521,
    "count": 2911,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 79218.0363,
    "count": 331,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 76584.9802,
    "count": 253,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 72086.8359,
    "count": 256,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 70462.5,
    "count": 32,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 69727.1034,
    "count": 290,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 50019.1971,
    "count": 1507,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 70431.3433,
    "count": 201,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 55118.9474,
    "count": 95,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 52914.2857,
    "count": 42,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 51141.791,
    "count": 67,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 48935.1724,
    "count": 145,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 32467.11,
    "count": 3263,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 58367.5676,
    "count": 37,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 56432,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 52092.3077,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 48251.8147,
    "count": 259,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 45084.4554,
    "count": 101,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "",
    "salary": 28310.8135,
    "count": 1217,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 66308.5,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 53495.4839,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 44274.1935,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 42060.2041,
    "count": 49,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 36008.1928,
    "count": 166,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 26034.2766,
    "count": 788,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 32061.2559,
    "count": 422,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 20435.9813,
    "count": 107,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 18882.1212,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18475.2212,
    "count": 226,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44523.9268,
    "count": 1202,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 63287.3016,
    "count": 63,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 56928.3019,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 52824.1206,
    "count": 199,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 47137.5758,
    "count": 132,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 46169.8413,
    "count": 126,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 64094.5687,
    "count": 313,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 76290,
    "count": 170,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 57627.027,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 47140,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "NOT SPECIFIED UTILITIES",
    "salary": 46054.5455,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 45674.5455,
    "count": 55,
    "rank": 5
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 53941.6764,
    "count": 859,
    "rank": 0
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 97647.0588,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 80148.2759,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 73480.3279,
    "count": 61,
    "rank": 3
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 63535.7143,
    "count": 70,
    "rank": 4
  },
  {
    "state": "Ohio",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 62952.6316,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 38744.8025,
    "count": 157,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 44437.4074,
    "count": 54,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 34036.0217,
    "count": 92,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Construction",
    "industry": "",
    "salary": 39854.4444,
    "count": 567,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 39854.4444,
    "count": 567,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 33055.5473,
    "count": 941,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 36557.1583,
    "count": 278,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 32745.4545,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 31158.2622,
    "count": 633,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 19624.2276,
    "count": 738,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 54300,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23579.3103,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 22511.7514,
    "count": 177,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 17190.9302,
    "count": 43,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 16554.482,
    "count": 444,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "",
    "salary": 48404.0702,
    "count": 484,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 60261.7949,
    "count": 39,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 51925.2101,
    "count": 119,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 49540.7759,
    "count": 116,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 43548.5833,
    "count": 120,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 42891.8919,
    "count": 37,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 43648.349,
    "count": 957,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 83676.25,
    "count": 80,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 50929.7297,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 49438.601,
    "count": 386,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 43634.6154,
    "count": 78,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 41040.2222,
    "count": 45,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "",
    "salary": 41340.1863,
    "count": 161,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 54504.4444,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 44932.3529,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 42110,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 37454.5455,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 25895.8333,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 47350.9013,
    "count": 1054,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 81126.7857,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 77769.5652,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 70050,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 61012.5,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Manufacturing",
    "industry": "COATING, ENGRAVING, HEAT TREATING AND ALLIED ACTIVITIES",
    "salary": 59800,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Military",
    "industry": "",
    "salary": 32270.4478,
    "count": 134,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 34678.8462,
    "count": 52,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 33511.9355,
    "count": 62,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 20372.7273,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Mining",
    "industry": "",
    "salary": 80569.4149,
    "count": 376,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 104850.6329,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 76155.1095,
    "count": 274,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 52866.6667,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 52727.939,
    "count": 689,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 101250.4878,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 84551.4634,
    "count": 82,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 75671.2329,
    "count": 73,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 65665.8537,
    "count": 82,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 59286.6667,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 44725.816,
    "count": 674,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 61885.7143,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 61489.375,
    "count": 112,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 60895,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 41725,
    "count": 96,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 38346.9672,
    "count": 122,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 30219.6774,
    "count": 930,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 61320,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 54098.0769,
    "count": 52,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 45735.1389,
    "count": 72,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 44057.1429,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 41225.9091,
    "count": 22,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "",
    "salary": 29456.6746,
    "count": 421,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 43975.6098,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "CAR WASHES",
    "salary": 43545.4545,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 42974.0741,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 31815,
    "count": 60,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 28144.4444,
    "count": 144,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 22941.117,
    "count": 188,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 33671.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 24914.1026,
    "count": 78,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 19177.907,
    "count": 86,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 48971.5211,
    "count": 355,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 76159.2593,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 58871.6981,
    "count": 53,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 52823.5294,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 51913.5135,
    "count": 37,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 49309.5652,
    "count": 115,
    "rank": 5
  },
  {
    "state": "Oklahoma",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 63781.5385,
    "count": 130,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 77792.6829,
    "count": 41,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 77454.5455,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 69687.5,
    "count": 48,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 30295.6522,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 48006.8635,
    "count": 271,
    "rank": 0
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 65446.1538,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 65180.5556,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 56363.6364,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 49621.2766,
    "count": 47,
    "rank": 4
  },
  {
    "state": "Oklahoma",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 46525,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33304.7164,
    "count": 335,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 73384.6154,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 48408.75,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 38509.7561,
    "count": 41,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 29117.5439,
    "count": 57,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 27654.5238,
    "count": 126,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Construction",
    "industry": "",
    "salary": 43750.96,
    "count": 500,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 43750.96,
    "count": 500,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34425.8399,
    "count": 1137,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 35254.5182,
    "count": 467,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 34414.0351,
    "count": 627,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 25716.3158,
    "count": 38,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 22149.4851,
    "count": 738,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 32645.8333,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 29261.3514,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 27077.1304,
    "count": 115,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 24050,
    "count": 20,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 21024.398,
    "count": 407,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "",
    "salary": 57982.4662,
    "count": 592,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 84191.9298,
    "count": 57,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 67495.3488,
    "count": 43,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 62779.7484,
    "count": 159,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 62670.1754,
    "count": 114,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Finance",
    "industry": "SAVINGS INSTITUTIONS, INCLUDING CREDIT UNIONS",
    "salary": 59714.2857,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 55572.2222,
    "count": 1197,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 75516.8317,
    "count": 101,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 68626.6667,
    "count": 75,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 67971.2831,
    "count": 491,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 57450.7042,
    "count": 142,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 50418.5366,
    "count": 82,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "",
    "salary": 58307.7927,
    "count": 193,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 103013.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 73490.4762,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 62835.4839,
    "count": 31,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 59665.5385,
    "count": 26,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 45310.3448,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 59564.7784,
    "count": 1128,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 105646.5909,
    "count": 176,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 104920,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 90717.6471,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 84760.6061,
    "count": 33,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 79384.6154,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Military",
    "industry": "",
    "salary": 51522.2222,
    "count": 18,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 53216.0795,
    "count": 1032,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 77626.1,
    "count": 100,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 75296.732,
    "count": 153,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "ADVERTISING, PUBLIC RELATIONS,  AND RELATED SERVICES",
    "salary": 68403.4483,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 68090.5263,
    "count": 95,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 63663.1579,
    "count": 38,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 52582.1827,
    "count": 591,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 66753.8462,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 62674.5098,
    "count": 51,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 57200.8543,
    "count": 199,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 56600,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 51209.6774,
    "count": 62,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 31422.33,
    "count": 1000,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 56709.3617,
    "count": 47,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "SHOE STORES",
    "salary": 51562.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 50200,
    "count": 34,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 46000,
    "count": 58,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 40560.4167,
    "count": 48,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "",
    "salary": 27540.9466,
    "count": 412,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 39418.1818,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 36246.5672,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "DRYCLEANING AND LAUNDRY SERVICES",
    "salary": 33564.2857,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 33072.8261,
    "count": 92,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 27807.6923,
    "count": 78,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 26783.374,
    "count": 246,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 32175,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 31038.0328,
    "count": 122,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 27844.7368,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 19170.8235,
    "count": 85,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 48341.6201,
    "count": 358,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 60980,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 60380,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "WAREHOUSING AND STORAGE",
    "salary": 52458.8235,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 50407.6923,
    "count": 39,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 49527.1845,
    "count": 103,
    "rank": 5
  },
  {
    "state": "Oregon",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 71165.1456,
    "count": 103,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 88074.7619,
    "count": 63,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 48378.5714,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 35644.4444,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 52408.1073,
    "count": 317,
    "rank": 0
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 128550,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 67796.2963,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "APPAREL, PIECE GOODS, AND NOTIONS MERCHANT WHOLESALERS",
    "salary": 65780,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 50100,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Oregon",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 48650,
    "count": 12,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 36552.6493,
    "count": 268,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 44249.3333,
    "count": 75,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 36455,
    "count": 142,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 28920,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 28850,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 21670.5882,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Construction",
    "industry": "",
    "salary": 43898.0906,
    "count": 1854,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 43898.0906,
    "count": 1854,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 40920.3292,
    "count": 3736,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 43149.9464,
    "count": 2053,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 40060,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 38779.2394,
    "count": 1512,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 31599.2908,
    "count": 141,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18758.9611,
    "count": 2522,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 40882,
    "count": 100,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 28043.1461,
    "count": 89,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 26484.7525,
    "count": 202,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 17105.0856,
    "count": 1461,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 16294.7868,
    "count": 516,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "",
    "salary": 67955.7746,
    "count": 2085,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 119059.2857,
    "count": 266,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 72498.2301,
    "count": 113,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 63422.673,
    "count": 737,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 61074.8387,
    "count": 465,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 60700,
    "count": 18,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 51148.2528,
    "count": 4613,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 84616.5967,
    "count": 429,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 59257.1429,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 59241.7254,
    "count": 284,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 56939.5747,
    "count": 1975,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 55082.5,
    "count": 160,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "",
    "salary": 57893.5009,
    "count": 577,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 113168.4211,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 87200,
    "count": 77,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 85236.3636,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 75633.3333,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 65586.1702,
    "count": 94,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 57932.4443,
    "count": 4664,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 118548.8806,
    "count": 268,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 85487.6404,
    "count": 178,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 79960.6061,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 78744.4444,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 78174,
    "count": 50,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Military",
    "industry": "",
    "salary": 53773.3333,
    "count": 30,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 50826.3158,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Mining",
    "industry": "",
    "salary": 62064.0845,
    "count": 284,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 64454.2857,
    "count": 105,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 63833.3333,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 62908.4211,
    "count": 95,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 45102.439,
    "count": 41,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 59023.6184,
    "count": 3192,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 84840.2976,
    "count": 336,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 83742.764,
    "count": 322,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 80185.5882,
    "count": 374,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 80169.1597,
    "count": 119,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 76682.3529,
    "count": 34,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 50442.9968,
    "count": 1852,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 64579.4211,
    "count": 190,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 60273.7705,
    "count": 61,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 50980.7488,
    "count": 828,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 50720.7483,
    "count": 147,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 47521.5814,
    "count": 215,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 31789.9765,
    "count": 3401,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 55906.9767,
    "count": 86,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "MAIL-ORDER HOUSES",
    "salary": 49570.1493,
    "count": 67,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 45335.3896,
    "count": 308,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 45110,
    "count": 38,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 44296.2025,
    "count": 237,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "",
    "salary": 28886.4099,
    "count": 1415,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 52566.6667,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 51577.2727,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 44728.1481,
    "count": 27,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 44423.8462,
    "count": 65,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Services",
    "industry": "PERSONAL AND HOUSEHOLD GOODS REPAIR AND MAINTENANCE",
    "salary": 37610.8696,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 26993.2937,
    "count": 841,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 33908.4946,
    "count": 465,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 25779.375,
    "count": 32,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21702.6316,
    "count": 76,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 16640.1866,
    "count": 268,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 42286.9058,
    "count": 1422,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 92565.2174,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 70629.6296,
    "count": 54,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 60918.3099,
    "count": 71,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 45508.5446,
    "count": 213,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 45164.6635,
    "count": 416,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 70798.2135,
    "count": 431,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 94143.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 80411.9679,
    "count": 249,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 61078.0822,
    "count": 73,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 49399,
    "count": 50,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 48059.5238,
    "count": 42,
    "rank": 5
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 57217.3014,
    "count": 982,
    "rank": 0
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 87459.7015,
    "count": 67,
    "rank": 1
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 77675.6757,
    "count": 37,
    "rank": 2
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 70260.5263,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 68865.3719,
    "count": 121,
    "rank": 4
  },
  {
    "state": "Pennsylvania",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 68436.5385,
    "count": 104,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Construction",
    "industry": "",
    "salary": 44968.3333,
    "count": 120,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 44968.3333,
    "count": 120,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 41623.4943,
    "count": 435,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 48053.9048,
    "count": 210,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 37058.8235,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 35504.3269,
    "count": 208,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 21275.8438,
    "count": 320,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 37954.6154,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 34783.3333,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 21282.9333,
    "count": 75,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 19999.0751,
    "count": 173,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 14623.3333,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "",
    "salary": 69182.0574,
    "count": 209,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 116245,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 95500,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 69143.3333,
    "count": 60,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 66127.6923,
    "count": 65,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 53279.4118,
    "count": 34,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 58458.3738,
    "count": 412,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 102566.6667,
    "count": 42,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 68091.5205,
    "count": 171,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 53571.875,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 51955.8824,
    "count": 34,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 44471.4286,
    "count": 14,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Information",
    "industry": "",
    "salary": 36733.0769,
    "count": 52,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 20740,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 61122.6168,
    "count": 321,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 91791.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "MACHINERY, N.E.C. OR NOT SPECIFIED",
    "salary": 83830.7692,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 66833.3333,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "RESIN, SYNTHETIC RUBBER, AND FIBERS AND FILAMENTS",
    "salary": 64341.6667,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Manufacturing",
    "industry": "SHIP AND BOAT BUILDING",
    "salary": 51675.8621,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Military",
    "industry": "",
    "salary": 53116,
    "count": 25,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 45350,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 65041.2573,
    "count": 342,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 95632.7273,
    "count": 55,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 95522.2222,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 93161.5152,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 85917.8571,
    "count": 28,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Professional Services",
    "industry": "ACCOUNTING, TAX PREPARATION, BOOKKEEPING, AND PAYROLL SERVICES",
    "salary": 60953.3333,
    "count": 30,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 65867.3203,
    "count": 153,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 81200,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 74067.6923,
    "count": 65,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 62778.5714,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 42245.4545,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 42090.9091,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 34553.5276,
    "count": 326,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 79498.3871,
    "count": 31,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 50415.7895,
    "count": 19,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS GENERAL MERCHANDISE STORES",
    "salary": 41666.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 31997.619,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 28378.75,
    "count": 32,
    "rank": 5
  },
  {
    "state": "Rhode Island",
    "industry_type": "Services",
    "industry": "",
    "salary": 32179.3277,
    "count": 119,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 40580.7692,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 36070,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 28668.4211,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Services",
    "industry": "DRYCLEANING AND LAUNDRY SERVICES",
    "salary": 21737.1429,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 29836.4,
    "count": 75,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 28558.4783,
    "count": 46,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 23002.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 50856.0759,
    "count": 79,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 54143.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Rhode Island",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 49764.2857,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Rhode Island",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 40190,
    "count": 20,
    "rank": 3
  },
  {
    "state": "Rhode Island",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 35586.9231,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Rhode Island",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 67481.8182,
    "count": 22,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 71701.3158,
    "count": 76,
    "rank": 0
  },
  {
    "state": "Rhode Island",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 45344.4444,
    "count": 18,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 25248,
    "count": 85,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 30337.1429,
    "count": 21,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 23187.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 19074.8571,
    "count": 35,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Construction",
    "industry": "",
    "salary": 42663.6789,
    "count": 598,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 42663.6789,
    "count": 598,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34468.1443,
    "count": 1331,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 34992.7633,
    "count": 807,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 34187.1193,
    "count": 486,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 18531.25,
    "count": 32,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 17859.1778,
    "count": 1046,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 35111.9231,
    "count": 26,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 22623.4783,
    "count": 115,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 17534.8955,
    "count": 670,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 15873.7821,
    "count": 156,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 15327.2727,
    "count": 11,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56330.1781,
    "count": 730,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 100848.8889,
    "count": 45,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 65836.6887,
    "count": 151,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 57230.8333,
    "count": 240,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 54259.6053,
    "count": 76,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 44008.75,
    "count": 160,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 51726.1298,
    "count": 1310,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 80597.5,
    "count": 140,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 73796.3265,
    "count": 49,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 58361.039,
    "count": 616,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 48650.9756,
    "count": 82,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 44125.6098,
    "count": 82,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "",
    "salary": 45214.9799,
    "count": 249,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 60310.1695,
    "count": 59,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 54595,
    "count": 40,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 41194.2308,
    "count": 52,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "LIBRARIES AND ARCHIVES",
    "salary": 28719.0476,
    "count": 21,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 26300,
    "count": 30,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 51808.8166,
    "count": 1707,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 91955.5556,
    "count": 27,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "ENGINE, TURBINE, AND POWER TRANSMISSION EQUIPMENT",
    "salary": 88696.2963,
    "count": 27,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 69968.7805,
    "count": 41,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 68567.6471,
    "count": 68,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 66891.4286,
    "count": 35,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Military",
    "industry": "",
    "salary": 27060.1544,
    "count": 259,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 44465.7895,
    "count": 38,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 26002.0408,
    "count": 49,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 23646.5116,
    "count": 43,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 21896.3158,
    "count": 114,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Mining",
    "industry": "",
    "salary": 55375,
    "count": 12,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 49275.3268,
    "count": 1117,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 90132.381,
    "count": 105,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 75460,
    "count": 30,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 67321.5385,
    "count": 130,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 60001.1765,
    "count": 119,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 59323.2558,
    "count": 86,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43601.0119,
    "count": 672,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 58276.5217,
    "count": 115,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 52237.037,
    "count": 27,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 46735,
    "count": 60,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 40913.6364,
    "count": 22,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 40029.1667,
    "count": 72,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 29418.4281,
    "count": 1266,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 56984.2105,
    "count": 38,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 52487.5,
    "count": 24,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "HARDWARE STORES",
    "salary": 51164.2857,
    "count": 14,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 48635.6944,
    "count": 72,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 45697.4359,
    "count": 117,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "",
    "salary": 30446.0071,
    "count": 561,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 46468.9474,
    "count": 19,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46272.7273,
    "count": 33,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 38509.8684,
    "count": 76,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 32682.4561,
    "count": 57,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 31670,
    "count": 30,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 19732.8061,
    "count": 196,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 25082.716,
    "count": 81,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 23706.8421,
    "count": 19,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 13893.4066,
    "count": 91,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44894.3526,
    "count": 363,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 80171.4286,
    "count": 14,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 67036.8421,
    "count": 19,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 54443.5897,
    "count": 39,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 48902.2222,
    "count": 45,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 48026.6667,
    "count": 60,
    "rank": 5
  },
  {
    "state": "South Carolina",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 66531.2139,
    "count": 173,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 80763,
    "count": 100,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 56869.5652,
    "count": 23,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 38620,
    "count": 30,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 60045.9608,
    "count": 306,
    "rank": 0
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "LUMBER AND OTHER CONSTRUCTION MATERIALS MERCHANT WHOLESALERS",
    "salary": 99642.8571,
    "count": 14,
    "rank": 1
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 94226.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 80857.1429,
    "count": 35,
    "rank": 3
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS DURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 71036.3636,
    "count": 11,
    "rank": 4
  },
  {
    "state": "South Carolina",
    "industry_type": "Wholesale Trade",
    "industry": "MOTOR VEHICLE AND MOTOR VEHICLE PARTS AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 68582.3529,
    "count": 17,
    "rank": 5
  },
  {
    "state": "South Dakota",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 36045.4375,
    "count": 160,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 49885.6944,
    "count": 72,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 23929.4118,
    "count": 17,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 22032.7869,
    "count": 61,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Construction",
    "industry": "",
    "salary": 33266.2411,
    "count": 141,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 33266.2411,
    "count": 141,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 28706.1694,
    "count": 248,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 29789.6923,
    "count": 65,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 28427.1186,
    "count": 177,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 15267.8302,
    "count": 212,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 17184,
    "count": 25,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 15992.6,
    "count": 50,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 13509.633,
    "count": 109,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Finance",
    "industry": "",
    "salary": 43212.948,
    "count": 173,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 49316.6667,
    "count": 18,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 48028.125,
    "count": 32,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 42395.122,
    "count": 82,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 33034.8148,
    "count": 27,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 39879.2359,
    "count": 301,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 64927.2727,
    "count": 11,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 52226.6667,
    "count": 15,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 49648.8189,
    "count": 127,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 40483.871,
    "count": 31,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Health Care",
    "industry": "RESIDENTIAL CARE FACILITIES, EXCEPT SKILLED NURSING FACILITIES",
    "salary": 23547.7273,
    "count": 22,
    "rank": 5
  },
  {
    "state": "South Dakota",
    "industry_type": "Information",
    "industry": "",
    "salary": 38222.5,
    "count": 40,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 64591.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 38630.041,
    "count": 244,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "MACHINERY, N.E.C. OR NOT SPECIFIED",
    "salary": 53466.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "MOTOR VEHICLES AND MOTOR VEHICLE EQUIPMENT",
    "salary": 44883.3333,
    "count": 18,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 37940,
    "count": 15,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "ANIMAL SLAUGHTERING AND PROCESSING",
    "salary": 35038.2353,
    "count": 34,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Manufacturing",
    "industry": "MISCELLANEOUS MANUFACTURING, N.E.C.",
    "salary": 34621.4286,
    "count": 14,
    "rank": 5
  },
  {
    "state": "South Dakota",
    "industry_type": "Military",
    "industry": "",
    "salary": 30016.6667,
    "count": 24,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 27547.619,
    "count": 21,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Mining",
    "industry": "",
    "salary": 50587.5,
    "count": 16,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 39217.6,
    "count": 125,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 52469.2308,
    "count": 13,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 52000,
    "count": 18,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Professional Services",
    "industry": "WASTE MANAGEMENT AND REMEDIATION SERVICES",
    "salary": 25318.1818,
    "count": 11,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Professional Services",
    "industry": "LANDSCAPING SERVICES",
    "salary": 19009.0909,
    "count": 11,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 36027.2549,
    "count": 153,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 44910.5263,
    "count": 19,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 44390.9091,
    "count": 11,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 39382.6923,
    "count": 52,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 35228.9474,
    "count": 19,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 30644.1176,
    "count": 34,
    "rank": 5
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28559.0041,
    "count": 241,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 51045.4545,
    "count": 22,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 46843.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 25158.1481,
    "count": 27,
    "rank": 3
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 22500,
    "count": 13,
    "rank": 4
  },
  {
    "state": "South Dakota",
    "industry_type": "Retail Trade",
    "industry": "GASOLINE STATIONS",
    "salary": 21689.4737,
    "count": 19,
    "rank": 5
  },
  {
    "state": "South Dakota",
    "industry_type": "Services",
    "industry": "",
    "salary": 26444.7059,
    "count": 85,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 35181.25,
    "count": 16,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 27792.1053,
    "count": 38,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 23596.25,
    "count": 48,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 30426.9565,
    "count": 23,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 19316.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45099.4444,
    "count": 90,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 53883.3333,
    "count": 24,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 38785.7143,
    "count": 28,
    "rank": 2
  },
  {
    "state": "South Dakota",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 61219.0476,
    "count": 21,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 77714.2857,
    "count": 14,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 50568.1818,
    "count": 66,
    "rank": 0
  },
  {
    "state": "South Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "FARM PRODUCT RAW MATERIAL MERCHANT WHOLESALERS",
    "salary": 56726.3158,
    "count": 19,
    "rank": 1
  },
  {
    "state": "South Dakota",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 41676.9231,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33900.2703,
    "count": 111,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 36470.3226,
    "count": 62,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 33763.6364,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 21302.6923,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Construction",
    "industry": "",
    "salary": 41381.3097,
    "count": 817,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 41381.3097,
    "count": 817,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35902.503,
    "count": 1678,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 41217.1945,
    "count": 581,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33288.6758,
    "count": 1027,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 28824.0625,
    "count": 64,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 21005.3482,
    "count": 1120,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 57670.5797,
    "count": 69,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 24823.8583,
    "count": 127,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23832.9545,
    "count": 44,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 20275,
    "count": 12,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 18139.6353,
    "count": 713,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "",
    "salary": 57258.3069,
    "count": 945,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 109796.2025,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 62464.2857,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 59814.9701,
    "count": 334,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 52943.6842,
    "count": 190,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 50008.75,
    "count": 80,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 56879.936,
    "count": 2030,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 90702.4066,
    "count": 241,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 71340.1515,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 61756.0947,
    "count": 169,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 59414.9296,
    "count": 923,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 58812.303,
    "count": 165,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "",
    "salary": 52466.3554,
    "count": 332,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 75187.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "SOUND RECORDING INDUSTRIES",
    "salary": 72150,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 63228,
    "count": 75,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 61464.8649,
    "count": 37,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 56067.6667,
    "count": 30,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 47985.017,
    "count": 2350,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 90109.5238,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "PULP, PAPER, AND PAPERBOARD MILLS",
    "salary": 88845.8333,
    "count": 48,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "CONSTRUCTION, AND MINING AND OIL AND GAS FIELD MACHINERY",
    "salary": 78973.6842,
    "count": 19,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "TEXTILE PRODUCT MILLS, EXCEPT CARPET AND RUG",
    "salary": 74395.2381,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 66725.641,
    "count": 78,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Military",
    "industry": "",
    "salary": 48626.0563,
    "count": 142,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 77666.6667,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 44337.7193,
    "count": 114,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Mining",
    "industry": "",
    "salary": 80087.8049,
    "count": 41,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 46506.6667,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 54200.3137,
    "count": 1530,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 91900.7576,
    "count": 132,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 83443.75,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 79778.4746,
    "count": 118,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 77005.2795,
    "count": 161,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 73589.0511,
    "count": 137,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43263.5752,
    "count": 951,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 50342.8571,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 49510.8333,
    "count": 72,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 48641.6667,
    "count": 36,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 48349.0566,
    "count": 106,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 45192.6563,
    "count": 128,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 31103.8239,
    "count": 1726,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 54173.0769,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "HARDWARE STORES",
    "salary": 52535.7143,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 51732.1678,
    "count": 143,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "OTHER MOTOR VEHICLE DEALERS",
    "salary": 51045.4545,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 47990.9091,
    "count": 11,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "",
    "salary": 29063.5151,
    "count": 697,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "FUNERAL HOMES, CEMETERIES AND CREMATORIES",
    "salary": 54873.8889,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 49392.8571,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 46165.5172,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 43276.9231,
    "count": 52,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 31320.303,
    "count": 99,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 19385.8363,
    "count": 281,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 29612.5,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 25790.5217,
    "count": 115,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 19012.5,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 13202.6087,
    "count": 138,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 52531.1794,
    "count": 814,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 71116.648,
    "count": 179,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 64393.9394,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 63821.4286,
    "count": 28,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 60844.1558,
    "count": 77,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 49005.2419,
    "count": 248,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 61872.0588,
    "count": 272,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 73789.8204,
    "count": 167,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 56116,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 42841.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 37618.75,
    "count": 48,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 36623.5294,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 53066.3354,
    "count": 483,
    "rank": 0
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 105350,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 89471.4286,
    "count": 35,
    "rank": 2
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "NOT SPECIFIED WHOLESALE TRADE",
    "salary": 74583.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 63495.8333,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Tennessee",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 61377.2727,
    "count": 66,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33669.2211,
    "count": 719,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 42718.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 36720.3762,
    "count": 319,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 30747.3052,
    "count": 308,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 30734.4262,
    "count": 61,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Construction",
    "industry": "",
    "salary": 45758.3828,
    "count": 3887,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 45758.3828,
    "count": 3887,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 39334.4781,
    "count": 7090,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 43632.8645,
    "count": 1941,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 40676.087,
    "count": 46,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 37735.6546,
    "count": 4858,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 36731.2245,
    "count": 245,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 23241.7491,
    "count": 4105,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 35667.9208,
    "count": 202,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 35558.6154,
    "count": 130,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 29006.9195,
    "count": 435,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 24978.008,
    "count": 497,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 22706.0748,
    "count": 107,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "",
    "salary": 68292.9012,
    "count": 4474,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 121315.082,
    "count": 488,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 70397.5806,
    "count": 496,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 67396.3963,
    "count": 974,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 64390.4348,
    "count": 1219,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 55969.5122,
    "count": 82,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 55764.5332,
    "count": 6620,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 96425.0866,
    "count": 635,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OPTOMETRISTS",
    "salary": 76060.6061,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 66904.125,
    "count": 320,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 63268.2392,
    "count": 2692,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 60427.9412,
    "count": 68,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "",
    "salary": 62111.6524,
    "count": 1283,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 116201.9608,
    "count": 51,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 71985.2332,
    "count": 193,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 71477.1392,
    "count": 388,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 70727.1717,
    "count": 99,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 68552.6316,
    "count": 19,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 68173.5449,
    "count": 6588,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "MISCELLANEOUS PETROLEUM AND COAL PRODUCTS",
    "salary": 122333.3333,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 110283.4862,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 101250.7772,
    "count": 193,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 99530.4598,
    "count": 174,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 97573.4644,
    "count": 407,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "",
    "salary": 37799.6203,
    "count": 790,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 62217.3913,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 37934.0164,
    "count": 488,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 35884.4749,
    "count": 219,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 35500,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 29203.7037,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Mining",
    "industry": "",
    "salary": 94957.7166,
    "count": 1616,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 112770.9259,
    "count": 270,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 93527.8193,
    "count": 1284,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 56166.6667,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 42412.5,
    "count": 48,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 64110.5996,
    "count": 7112,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 112570.9302,
    "count": 86,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 93536.4552,
    "count": 993,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 91761.3343,
    "count": 682,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 85039.4182,
    "count": 911,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 83957.1445,
    "count": 713,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 52077.1494,
    "count": 3473,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 67625.1208,
    "count": 207,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 60932.381,
    "count": 105,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 60796.3864,
    "count": 559,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 57619.1176,
    "count": 170,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 50023.1858,
    "count": 1604,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 36154.4393,
    "count": 6296,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "VENDING MACHINE OPERATORS",
    "salary": 64375,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 63015.1703,
    "count": 323,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 61234.8837,
    "count": 43,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 54312.0939,
    "count": 554,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 52847.2982,
    "count": 285,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "",
    "salary": 32782.1399,
    "count": 2645,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 59677.7778,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 51718.6364,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 50723.5514,
    "count": 214,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 47452.381,
    "count": 168,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 45746.5753,
    "count": 73,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 23471.5872,
    "count": 1032,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 29674.898,
    "count": 392,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 26685.3012,
    "count": 83,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18748.1852,
    "count": 486,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 17797.4648,
    "count": 71,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 54712.2729,
    "count": 2785,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 94455.3719,
    "count": 121,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 73241.1594,
    "count": 138,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 72578.3505,
    "count": 388,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 66643.4783,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 55562.297,
    "count": 431,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 68461.8889,
    "count": 720,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 91322.3214,
    "count": 112,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 77580.8403,
    "count": 357,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 68310,
    "count": 30,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 42522.5,
    "count": 160,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 40442.1053,
    "count": 57,
    "rank": 5
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 63588.7416,
    "count": 1939,
    "rank": 0
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 106683.3333,
    "count": 162,
    "rank": 1
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 89453.6441,
    "count": 118,
    "rank": 2
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "PAPER AND PAPER PRODUCTS MERCHANT WHOLESALERS",
    "salary": 74547.619,
    "count": 21,
    "rank": 3
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "METALS AND MINERALS, EXCEPT PETROLEUM, MERCHANT WHOLESALERS",
    "salary": 73560.9756,
    "count": 41,
    "rank": 4
  },
  {
    "state": "Texas",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 72935.3659,
    "count": 164,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 39468.5526,
    "count": 76,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 39021.5152,
    "count": 33,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 29353.5714,
    "count": 28,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Construction",
    "industry": "",
    "salary": 42065.1343,
    "count": 335,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 42065.1343,
    "count": 335,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 37842.7303,
    "count": 912,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 51158.0952,
    "count": 42,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 42154.0698,
    "count": 344,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 33905.9962,
    "count": 522,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 25483.9348,
    "count": 399,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 51711.5385,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 38691.3043,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 23874.1818,
    "count": 55,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 23399.7368,
    "count": 76,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 22824.0488,
    "count": 205,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "",
    "salary": 58655.4673,
    "count": 428,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 84014.8936,
    "count": 47,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 67661.1765,
    "count": 85,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 61870.4225,
    "count": 71,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 51105.7447,
    "count": 94,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 49510.8911,
    "count": 101,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 56351.0172,
    "count": 639,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 91700.8929,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 65442.8571,
    "count": 49,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 61005.1195,
    "count": 293,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 59264.2857,
    "count": 49,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 44601.3514,
    "count": 74,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "",
    "salary": 54136.8902,
    "count": 164,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 74222.2222,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 72600,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 68761.5385,
    "count": 26,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 56531.8182,
    "count": 22,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 47800,
    "count": 20,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 57784.3299,
    "count": 776,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 91925,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 87592.1053,
    "count": 38,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 86528.2051,
    "count": 39,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 80538.8889,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 79062.5,
    "count": 16,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Military",
    "industry": "",
    "salary": 43316.6667,
    "count": 30,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 39130,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Mining",
    "industry": "",
    "salary": 67411.3043,
    "count": 115,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Mining",
    "industry": "METAL ORE MINING",
    "salary": 85400,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 68247.619,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 62480,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 61931.4815,
    "count": 54,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 58441.9523,
    "count": 755,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 91250,
    "count": 66,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 82295,
    "count": 20,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 80926.087,
    "count": 69,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 74976.9231,
    "count": 143,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 72154.8387,
    "count": 93,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 50991.1872,
    "count": 438,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 68663,
    "count": 100,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 56590.4762,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 54394.4444,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 51804.3478,
    "count": 46,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 47261.1111,
    "count": 36,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 36850.2232,
    "count": 672,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 65362.8571,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOTIVE PARTS, ACCESSORIES, AND TIRE STORES",
    "salary": 57972.2581,
    "count": 31,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "NOT SPECIFIED RETAIL TRADE",
    "salary": 53463.6364,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 47960,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 47175,
    "count": 52,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "",
    "salary": 39104.2672,
    "count": 232,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 51962.2951,
    "count": 61,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 50856.25,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 44185.9091,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "OTHER PERSONAL SERVICES",
    "salary": 42705.5556,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 32500,
    "count": 48,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 20152.7027,
    "count": 111,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 24120.4082,
    "count": 49,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 13656.25,
    "count": 24,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 12463.6364,
    "count": 33,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44038.1579,
    "count": 266,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 53855.5556,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 51433.3333,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 41995.1613,
    "count": 62,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 39955.119,
    "count": 84,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 39666,
    "count": 20,
    "rank": 5
  },
  {
    "state": "Utah",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 64433.3333,
    "count": 87,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 76764.1509,
    "count": 53,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 60307.1429,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 36815.3846,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 57667.8571,
    "count": 196,
    "rank": 0
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 78863.6364,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 66694.4444,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 66508.3333,
    "count": 12,
    "rank": 3
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "HARDWARE, AND PLUMBING AND HEATING EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 59807.6923,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Utah",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 55544.8276,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Vermont",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 26648.6486,
    "count": 37,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 24133.3333,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 19200,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Construction",
    "industry": "",
    "salary": 37307.8182,
    "count": 110,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 37307.8182,
    "count": 110,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 34145.6869,
    "count": 313,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 36446.369,
    "count": 168,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 32298.5385,
    "count": 130,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 23369.2308,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18019.8947,
    "count": 190,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 23466.6667,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 20784.2857,
    "count": 35,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 15507.6042,
    "count": 96,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 6633.3333,
    "count": 18,
    "rank": 4
  },
  {
    "state": "Vermont",
    "industry_type": "Finance",
    "industry": "",
    "salary": 55671.4286,
    "count": 77,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 75653.8462,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 48847.0588,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 39980,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 46464.4335,
    "count": 203,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 60391.25,
    "count": 80,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 39208,
    "count": 25,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 31980,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "HOME HEALTH CARE SERVICES",
    "salary": 30995,
    "count": 20,
    "rank": 4
  },
  {
    "state": "Vermont",
    "industry_type": "Health Care",
    "industry": "NURSING CARE FACILITIES (SKILLED NURSING FACILITIES)",
    "salary": 28534.4828,
    "count": 29,
    "rank": 5
  },
  {
    "state": "Vermont",
    "industry_type": "Information",
    "industry": "",
    "salary": 49025,
    "count": 28,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 51209.8446,
    "count": 193,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "MEDICAL EQUIPMENT AND SUPPLIES",
    "salary": 76753.8462,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 68494.4444,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "SEAFOOD AND OTHER MISCELLANEOUS FOODS, N.E.C.",
    "salary": 46184.6154,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "DAIRY PRODUCTS",
    "salary": 42133.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Vermont",
    "industry_type": "Manufacturing",
    "industry": "FURNITURE AND RELATED PRODUCTS",
    "salary": 32761.5385,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 53981.2422,
    "count": 161,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 83188.8889,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 81795.6522,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 71104.3478,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 36111.7647,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Vermont",
    "industry_type": "Professional Services",
    "industry": "LANDSCAPING SERVICES",
    "salary": 24446.6667,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43287.1942,
    "count": 139,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 61031.25,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 54022.7273,
    "count": 22,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 50168.75,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 38043.75,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Vermont",
    "industry_type": "Public Administration",
    "industry": "EXECUTIVE OFFICES AND LEGISLATIVE BODIES",
    "salary": 24134.7826,
    "count": 23,
    "rank": 5
  },
  {
    "state": "Vermont",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 28266.3372,
    "count": 172,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Retail Trade",
    "industry": "FUEL DEALERS",
    "salary": 33308.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Retail Trade",
    "industry": "GROCERY STORES",
    "salary": 12715.1515,
    "count": 33,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Services",
    "industry": "",
    "salary": 25713.2813,
    "count": 64,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 27000,
    "count": 25,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 25690.1754,
    "count": 57,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 26521.4286,
    "count": 35,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 20187.5,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 33742.1875,
    "count": 64,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 38830.7692,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Vermont",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 37265.2174,
    "count": 23,
    "rank": 2
  },
  {
    "state": "Vermont",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 18490.9091,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Vermont",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 62090.9091,
    "count": 11,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 40935.1351,
    "count": 37,
    "rank": 0
  },
  {
    "state": "Vermont",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 35318.75,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 30856.3971,
    "count": 136,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 38861.5385,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 32636.3636,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 29120,
    "count": 35,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 23901.1667,
    "count": 60,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Construction",
    "industry": "",
    "salary": 48048.1631,
    "count": 1067,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 48048.1631,
    "count": 1067,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 41358.2798,
    "count": 2645,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 44196.1394,
    "count": 904,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 39919.9248,
    "count": 133,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 39903.062,
    "count": 1597,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Educational Services",
    "industry": "BUSINESS, TECHNICAL, AND TRADE SCHOOLS AND TRAINING",
    "salary": 36800,
    "count": 11,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 22976.6756,
    "count": 1492,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 53037.973,
    "count": 74,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 34954.3979,
    "count": 191,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 30715.0526,
    "count": 95,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 19614.5721,
    "count": 853,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 15251.4286,
    "count": 35,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "",
    "salary": 75077.3706,
    "count": 1468,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 120959.0909,
    "count": 132,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 95903.8251,
    "count": 183,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 94880.3922,
    "count": 51,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 72147.013,
    "count": 308,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 67595.0276,
    "count": 362,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 56944.1158,
    "count": 2211,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 91046.9145,
    "count": 269,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 60135.7798,
    "count": 109,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 58843.8404,
    "count": 940,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 58639.7129,
    "count": 209,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 58334.2614,
    "count": 176,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "",
    "salary": 76939.9229,
    "count": 519,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 137705.8824,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 108890.9091,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 103997.1429,
    "count": 105,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "DATA PROCESSING, HOSTING, AND RELATED SERVICES",
    "salary": 85785.7143,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 82409.1209,
    "count": 91,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 60376.7933,
    "count": 1843,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 124542.1053,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "AIRCRAFT AND PARTS",
    "salary": 104652.9412,
    "count": 34,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 98551.5556,
    "count": 45,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "COMMUNICATIONS, AND AUDIO AND VIDEO EQUIPMENT",
    "salary": 98133.3333,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 97431.4286,
    "count": 35,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "",
    "salary": 52375.4237,
    "count": 826,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 96573.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 61340,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 59333.3333,
    "count": 126,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 59091.3043,
    "count": 92,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Military",
    "industry": "U.S. MARINES",
    "salary": 52063.1579,
    "count": 95,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Mining",
    "industry": "",
    "salary": 82904.0541,
    "count": 74,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 147554.5455,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 65705,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 56800,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 90398.5502,
    "count": 3566,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 126416.3907,
    "count": 302,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 113534.8188,
    "count": 552,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 107855.8723,
    "count": 877,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 105120.8333,
    "count": 24,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 101716.5726,
    "count": 496,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 76574.9075,
    "count": 2702,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 93022.0459,
    "count": 1002,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 89387.3563,
    "count": 261,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 77640,
    "count": 80,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 77576.4706,
    "count": 85,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 75690.122,
    "count": 164,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 34974.469,
    "count": 1987,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 81580,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 65634.7826,
    "count": 69,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "HOUSEHOLD APPLIANCE STORES",
    "salary": 56930.7692,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "HEALTH AND PERSONAL CARE, EXCEPT DRUG, STORES",
    "salary": 56788.5714,
    "count": 35,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 52791.658,
    "count": 193,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "",
    "salary": 44783.8688,
    "count": 1052,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 120387.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 100332.2581,
    "count": 93,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 67199.6354,
    "count": 192,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "ELECTRONIC AND PRECISION EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 50680.9524,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 42270.9677,
    "count": 124,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 28719.7025,
    "count": 437,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 40241.6667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 35812.5806,
    "count": 217,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 19619.875,
    "count": 160,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 18727.7778,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 53619.887,
    "count": 708,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 80542.5,
    "count": 56,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 78090.9091,
    "count": 44,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 75333.3333,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 62704.6729,
    "count": 107,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 55025.8333,
    "count": 120,
    "rank": 5
  },
  {
    "state": "Virginia",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 71037.7778,
    "count": 180,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 80471.5517,
    "count": 116,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 44994.4444,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 41006.25,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 66247.7975,
    "count": 395,
    "rank": 0
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS NONDURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 95573.0769,
    "count": 26,
    "rank": 1
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 94108.3333,
    "count": 36,
    "rank": 2
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 92290.9091,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 83107.4074,
    "count": 27,
    "rank": 4
  },
  {
    "state": "Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 77000,
    "count": 15,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 33018.0361,
    "count": 443,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "FISHING, HUNTING AND TRAPPING",
    "salary": 56479.1667,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 50923.0769,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 49865.5172,
    "count": 29,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 35286.2069,
    "count": 29,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 34378.9706,
    "count": 68,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Construction",
    "industry": "",
    "salary": 50388.2175,
    "count": 993,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 50388.2175,
    "count": 993,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 39569.8529,
    "count": 1836,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 40266.0434,
    "count": 1107,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39291.4375,
    "count": 640,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 32962.2785,
    "count": 79,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 25542.2443,
    "count": 1359,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 37372.093,
    "count": 86,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 30190.9091,
    "count": 66,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 27963.7584,
    "count": 149,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 25469.7735,
    "count": 309,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Entertainment",
    "industry": "DRINKING PLACES, ALCOHOLIC BEVERAGES",
    "salary": 23941.1765,
    "count": 17,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "",
    "salary": 64119.9805,
    "count": 1024,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 97256.383,
    "count": 94,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 68893.6508,
    "count": 63,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "COMMERCIAL, INDUSTRIAL, AND OTHER INTANGIBLE ASSETS RENTAL AND LEASING",
    "salary": 67676.9231,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 67357.8873,
    "count": 284,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 62741.7241,
    "count": 174,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 59754.9173,
    "count": 1934,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 94963.3136,
    "count": 169,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 67481.0219,
    "count": 137,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 66791.4625,
    "count": 800,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 59375.9211,
    "count": 152,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 58829.1429,
    "count": 245,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "",
    "salary": 81885.2268,
    "count": 463,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 157891.1392,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "OTHER INFORMATION SERVICES, EXCEPT LIBRARIES AND ARCHIVES, AND INTERNET PUBLISHING AND BROADCAST",
    "salary": 114693.3333,
    "count": 15,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "INTERNET PUBLISHING AND BROADCASTING AND WEB SEARCH PORTALS",
    "salary": 95800,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 88347.8873,
    "count": 71,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 75951.3158,
    "count": 76,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 69607.65,
    "count": 2000,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "COMPUTER AND PERIPHERAL EQUIPMENT",
    "salary": 121875,
    "count": 24,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "SPORTING AND ATHLETIC GOODS, AND DOLL, TOY, AND GAME MANUFACTURING",
    "salary": 95689.6552,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "AEROSPACE PRODUCTS AND PARTS",
    "salary": 94184.127,
    "count": 378,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "PETROLEUM REFINING",
    "salary": 92476,
    "count": 25,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Manufacturing",
    "industry": "ELECTRONIC COMPONENTS AND PRODUCTS, N.E.C.",
    "salary": 91720,
    "count": 100,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "",
    "salary": 38967.9803,
    "count": 406,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "U.S. ARMED FORCES, BRANCH NOT SPECIFIED",
    "salary": 55850,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "U.S. COAST GUARD",
    "salary": 48230.7692,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 39387.2093,
    "count": 172,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 37442.8571,
    "count": 49,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Military",
    "industry": "U.S. NAVY",
    "salary": 36428.2759,
    "count": 145,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Mining",
    "industry": "",
    "salary": 52627.6,
    "count": 25,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 72227.9898,
    "count": 2159,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 116686.6216,
    "count": 518,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT OF COMPANIES AND ENTERPRISES",
    "salary": 113614.2857,
    "count": 21,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 80790.6897,
    "count": 116,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 74686.5865,
    "count": 208,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 72674.7191,
    "count": 178,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 54244.8462,
    "count": 1307,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 63349.0909,
    "count": 110,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 63286.6667,
    "count": 45,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 57874.3902,
    "count": 164,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 54791.1574,
    "count": 432,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 53932.9787,
    "count": 94,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 39405.7813,
    "count": 1728,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONIC SHOPPING",
    "salary": 89913.9241,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "ELECTRONICS STORES",
    "salary": 69768.6667,
    "count": 75,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 58119.4595,
    "count": 111,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "MISCELLANEOUS GENERAL MERCHANDISE STORES",
    "salary": 57266.9643,
    "count": 56,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 46926.6279,
    "count": 86,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "",
    "salary": 33664.9258,
    "count": 674,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "LABOR UNIONS",
    "salary": 70076.1905,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 56112.963,
    "count": 27,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 43243.4783,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 42918.4071,
    "count": 113,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 40085.3571,
    "count": 84,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 29361,
    "count": 390,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 34474.0741,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 34250.186,
    "count": 215,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 27909.5238,
    "count": 21,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 20237.0079,
    "count": 127,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 53378.2383,
    "count": 789,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 70475.5556,
    "count": 90,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 68930,
    "count": 40,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 62188.9262,
    "count": 149,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "WATER TRANSPORTATION",
    "salary": 58324.7826,
    "count": 46,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Transportation",
    "industry": "BUS SERVICE AND URBAN TRANSIT",
    "salary": 50501.0417,
    "count": 96,
    "rank": 5
  },
  {
    "state": "Washington",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 75336.3636,
    "count": 176,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 85777.3196,
    "count": 97,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 84316.6667,
    "count": 12,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 82214.2857,
    "count": 14,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 48248.8372,
    "count": 43,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 55047.2329,
    "count": 571,
    "rank": 0
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "WHOLESALE ELECTRONIC MARKETS AND AGENTS AND BROKERS",
    "salary": 81621.0526,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 77761.8182,
    "count": 55,
    "rank": 2
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "ALCOHOLIC BEVERAGES MERCHANT WHOLESALERS",
    "salary": 75866.6667,
    "count": 18,
    "rank": 3
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 70276.1905,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Washington",
    "industry_type": "Wholesale Trade",
    "industry": "PETROLEUM AND PETROLEUM PRODUCTS MERCHANT WHOLESALERS",
    "salary": 69488.2353,
    "count": 17,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24233.3333,
    "count": 24,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Construction",
    "industry": "",
    "salary": 39087.2222,
    "count": 270,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 39087.2222,
    "count": 270,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 36394.5113,
    "count": 532,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39300,
    "count": 177,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35861.0682,
    "count": 337,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 17811.1111,
    "count": 18,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 15426.8992,
    "count": 387,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 26286.8182,
    "count": 22,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 17840,
    "count": 40,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 15985,
    "count": 20,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 15388.7952,
    "count": 83,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 13728.7192,
    "count": 203,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "",
    "salary": 47422.6593,
    "count": 182,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 59727.6364,
    "count": 11,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 51216.9811,
    "count": 53,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 43898.5075,
    "count": 67,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 38616.8,
    "count": 25,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Finance",
    "industry": "AUTOMOTIVE EQUIPMENT RENTAL AND LEASING",
    "salary": 23927.2727,
    "count": 11,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 44679.2487,
    "count": 559,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF DENTISTS",
    "salary": 76200,
    "count": 20,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 60858.9744,
    "count": 39,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 53520.6349,
    "count": 252,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 40774,
    "count": 50,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Health Care",
    "industry": "OTHER HEALTH CARE SERVICES",
    "salary": 39079.4872,
    "count": 39,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Information",
    "industry": "",
    "salary": 45908.6957,
    "count": 69,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 84705.5556,
    "count": 18,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Information",
    "industry": "NEWSPAPER PUBLISHERS",
    "salary": 18742.8571,
    "count": 14,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 48961.9681,
    "count": 376,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "ALUMINUM PRODUCTION AND PROCESSING",
    "salary": 76750,
    "count": 12,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "PHARMACEUTICALS AND MEDICINES",
    "salary": 76165,
    "count": 20,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 74295.8333,
    "count": 48,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "CONSTRUCTION, AND MINING AND OIL AND GAS FIELD MACHINERY",
    "salary": 51223.0769,
    "count": 13,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Manufacturing",
    "industry": "PRINTING AND RELATED SUPPORT ACTIVITIES",
    "salary": 46030.7692,
    "count": 13,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Mining",
    "industry": "",
    "salary": 69269.8925,
    "count": 186,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 84000,
    "count": 11,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 70581.1594,
    "count": 138,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 61205.8824,
    "count": 34,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 40818.4034,
    "count": 357,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 65921.9512,
    "count": 41,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 65307.4074,
    "count": 27,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 64037.5,
    "count": 40,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 58407.1429,
    "count": 14,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 55060,
    "count": 20,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 48312.5937,
    "count": 347,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 67819.0476,
    "count": 21,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "PUBLIC FINANCE ACTIVITIES",
    "salary": 63373.913,
    "count": 23,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 60645.8333,
    "count": 24,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 51682.7273,
    "count": 33,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 47963.8298,
    "count": 47,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 25015.9583,
    "count": 480,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "FURNITURE AND HOME FURNISHINGS STORES",
    "salary": 39906.25,
    "count": 16,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 39110,
    "count": 40,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 38984.3478,
    "count": 46,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 36780.9524,
    "count": 21,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Retail Trade",
    "industry": "SPORTING GOODS, AND HOBBY AND TOY STORES",
    "salary": 26900,
    "count": 12,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Services",
    "industry": "",
    "salary": 29911.2921,
    "count": 178,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 30880.6452,
    "count": 31,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 28650.3279,
    "count": 61,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 27405,
    "count": 14,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Services",
    "industry": "BEAUTY SALONS",
    "salary": 19583.6364,
    "count": 11,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 16666.6379,
    "count": 116,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 19991.9355,
    "count": 62,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 10754.8718,
    "count": 39,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 45459.887,
    "count": 177,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "PIPELINE TRANSPORTATION",
    "salary": 65863.6364,
    "count": 11,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 63360.8696,
    "count": 23,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 47417.1429,
    "count": 35,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 42072.1311,
    "count": 61,
    "rank": 4
  },
  {
    "state": "West Virginia",
    "industry_type": "Transportation",
    "industry": "SERVICES INCIDENTAL TO TRANSPORTATION",
    "salary": 29047.8261,
    "count": 23,
    "rank": 5
  },
  {
    "state": "West Virginia",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 64253.5211,
    "count": 71,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Utilities",
    "industry": "NATURAL GAS DISTRIBUTION",
    "salary": 86950,
    "count": 12,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 72319.4444,
    "count": 36,
    "rank": 2
  },
  {
    "state": "West Virginia",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 31636.3636,
    "count": 11,
    "rank": 3
  },
  {
    "state": "West Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 46021.954,
    "count": 87,
    "rank": 0
  },
  {
    "state": "West Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 70047.1429,
    "count": 14,
    "rank": 1
  },
  {
    "state": "West Virginia",
    "industry_type": "Wholesale Trade",
    "industry": "GROCERY AND RELATED PRODUCT MERCHANT WHOLESALERS",
    "salary": 42885.7143,
    "count": 14,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 34807.9481,
    "count": 424,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "FORESTRY EXCEPT LOGGING",
    "salary": 51008.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "SUPPORT ACTIVITIES FOR AGRICULTURE AND FORESTRY",
    "salary": 41413.3333,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 39196.3934,
    "count": 183,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "LOGGING",
    "salary": 30393.75,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Agriculture",
    "industry": "CROP PRODUCTION",
    "salary": 29445.0769,
    "count": 195,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Construction",
    "industry": "",
    "salary": 44123.4368,
    "count": 902,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 44123.4368,
    "count": 902,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 35595.6392,
    "count": 1541,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 36224.6628,
    "count": 519,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 35921.6046,
    "count": 966,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Educational Services",
    "industry": "OTHER SCHOOLS AND INSTRUCTION, AND EDUCATIONAL SUPPORT SERVICES",
    "salary": 24083.1915,
    "count": 47,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 16991.6029,
    "count": 1098,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "PERFORMING ARTS, SPECTATOR SPORTS, AND RELATED INDUSTRIES",
    "salary": 31654.6667,
    "count": 45,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "RECREATIONAL VEHICLE PARKS AND CAMPS, AND ROOMING AND BOARDING HOUSES",
    "salary": 24229.4118,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 20245.6542,
    "count": 214,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 19137.5573,
    "count": 131,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 17621.875,
    "count": 64,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "",
    "salary": 56932.2368,
    "count": 988,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "SECURITIES, COMMODITIES, FUNDS, TRUSTS, AND OTHER FINANCIAL INVESTMENTS",
    "salary": 112357.1429,
    "count": 84,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "NONDEPOSITORY CREDIT AND RELATED ACTIVITIES",
    "salary": 64893.0233,
    "count": 43,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 56899.2647,
    "count": 408,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 48122.8188,
    "count": 149,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 45492.3554,
    "count": 242,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 49465.9168,
    "count": 1876,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 81290.5063,
    "count": 79,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 62395.4545,
    "count": 231,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "OFFICES OF CHIROPRACTORS",
    "salary": 59918.75,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 58512.4543,
    "count": 766,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Health Care",
    "industry": "OFFICES OF OTHER HEALTH PRACTITIONERS",
    "salary": 53238.0952,
    "count": 21,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "",
    "salary": 49555.3333,
    "count": 285,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "SOFTWARE PUBLISHERS",
    "salary": 99669.2308,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 67335.9375,
    "count": 64,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "TELECOMMUNICATIONS, EXCEPT WIRED TELECOMMUNICATIONS CARRIERS",
    "salary": 57806.25,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "MOTION PICTURE AND VIDEO INDUSTRIES",
    "salary": 51341.1765,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Information",
    "industry": "BROADCASTING, EXCEPT INTERNET",
    "salary": 46604.2857,
    "count": 35,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 49608.9144,
    "count": 3224,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "SOAP, CLEANING COMPOUND, AND COSMETICS",
    "salary": 84190.4762,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "NAVIGATIONAL, MEASURING, ELECTROMEDICAL, AND CONTROL INSTRUMENTS",
    "salary": 71120.5128,
    "count": 39,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "PAPERBOARD CONTAINER",
    "salary": 67293.75,
    "count": 32,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "IRON AND STEEL MILLS AND STEEL PRODUCTS",
    "salary": 64836.1111,
    "count": 36,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Manufacturing",
    "industry": "OTHER TRANSPORTATION EQUIPMENT",
    "salary": 63735.4839,
    "count": 31,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Military",
    "industry": "",
    "salary": 34982.6087,
    "count": 23,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Military",
    "industry": "U.S. ARMY",
    "salary": 27507.1429,
    "count": 14,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Mining",
    "industry": "",
    "salary": 52380,
    "count": 20,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 53173.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 48644.8691,
    "count": 1222,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 81133.6752,
    "count": 117,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "COMPUTER SYSTEMS DESIGN AND RELATED SERVICES",
    "salary": 76839.4737,
    "count": 114,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "MANAGEMENT, SCIENTIFIC, AND TECHNICAL CONSULTING SERVICES",
    "salary": 63420.2247,
    "count": 89,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "SCIENTIFIC RESEARCH AND DEVELOPMENT SERVICES",
    "salary": 59681.8182,
    "count": 44,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Professional Services",
    "industry": "ARCHITECTURAL, ENGINEERING, AND RELATED SERVICES",
    "salary": 56770,
    "count": 130,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 43627.0385,
    "count": 753,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 58037.2549,
    "count": 51,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 51727.7143,
    "count": 35,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 46946.875,
    "count": 96,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 45029.6142,
    "count": 337,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 44000,
    "count": 33,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 30500.6616,
    "count": 1578,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "PHARMACIES AND DRUG STORES",
    "salary": 51480.8219,
    "count": 73,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 39964.4444,
    "count": 90,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 39265.9574,
    "count": 141,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "LAWN AND GARDEN EQUIPMENT AND SUPPLIES STORES",
    "salary": 38809.5588,
    "count": 68,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Retail Trade",
    "industry": "OFFICE SUPPLIES AND STATIONERY STORES",
    "salary": 38307.6923,
    "count": 13,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "",
    "salary": 30795.2981,
    "count": 587,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 45095.8108,
    "count": 74,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "COMMERCIAL AND INDUSTRIAL MACHINERY AND EQUIPMENT REPAIR AND MAINTENANCE",
    "salary": 37890,
    "count": 30,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 37190.1786,
    "count": 112,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "BUSINESS, PROFESSIONAL, POLITICAL, AND SIMILAR ORGANIZATIONS",
    "salary": 35392.8571,
    "count": 21,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 27734.1566,
    "count": 166,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 24604.8137,
    "count": 322,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 29751.25,
    "count": 168,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Social Assistance",
    "industry": "VOCATIONAL REHABILITATION SERVICES",
    "salary": 21523.4483,
    "count": 29,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18858.9091,
    "count": 110,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Social Assistance",
    "industry": "COMMUNITY FOOD AND HOUSING, AND EMERGENCY SERVICES",
    "salary": 15058.6667,
    "count": 15,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 44653.6797,
    "count": 693,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 66433.3333,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "AIR TRANSPORTATION",
    "salary": 60477.1429,
    "count": 35,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 47088.5185,
    "count": 297,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "COURIERS AND MESSENGERS",
    "salary": 46049.1803,
    "count": 61,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 45164.8182,
    "count": 110,
    "rank": 5
  },
  {
    "state": "Wisconsin",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 75056.5217,
    "count": 161,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 83956.4815,
    "count": 108,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Utilities",
    "industry": "ELECTRIC AND GAS, AND OTHER COMBINATIONS",
    "salary": 60017.6471,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Utilities",
    "industry": "SEWAGE TREATMENT FACILITIES",
    "salary": 48669.2308,
    "count": 13,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Utilities",
    "industry": "WATER, STEAM, AIR CONDITIONING, AND IRRIGATION SYSTEMS",
    "salary": 44523.0769,
    "count": 13,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 52682.2381,
    "count": 420,
    "rank": 0
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "DRUGS, SUNDRIES, AND CHEMICAL AND ALLIED PRODUCTS MERCHANT WHOLESALERS",
    "salary": 77288.8889,
    "count": 18,
    "rank": 1
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "PROFESSIONAL AND COMMERCIAL EQUIPMENT AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 68004.7619,
    "count": 42,
    "rank": 2
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "MISCELLANEOUS NONDURABLE GOODS MERCHANT WHOLESALERS",
    "salary": 66982.6087,
    "count": 23,
    "rank": 3
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "HOUSEHOLD APPLIANCES AND ELECTRICAL AND ELECTRONIC GOODS MERCHANT WHOLESALERS",
    "salary": 60121.4286,
    "count": 14,
    "rank": 4
  },
  {
    "state": "Wisconsin",
    "industry_type": "Wholesale Trade",
    "industry": "MACHINERY, EQUIPMENT, AND SUPPLIES MERCHANT WHOLESALERS",
    "salary": 57035.7143,
    "count": 56,
    "rank": 5
  },
  {
    "state": "Wyoming",
    "industry_type": "Agriculture",
    "industry": "",
    "salary": 24897.8049,
    "count": 41,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Agriculture",
    "industry": "ANIMAL PRODUCTION AND AQUACULTURE",
    "salary": 28104.0741,
    "count": 27,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Construction",
    "industry": "",
    "salary": 42308.1818,
    "count": 110,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Construction",
    "industry": "CONSTRUCTION, INCL CLEANING DURING AND IMM AFTER",
    "salary": 42308.1818,
    "count": 110,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Educational Services",
    "industry": "",
    "salary": 36727.1429,
    "count": 238,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Educational Services",
    "industry": "COLLEGES, UNIVERSITIES, AND PROFESSIONAL SCHOOLS, INCLUDING JUNIOR COLLEGES",
    "salary": 39909.4737,
    "count": 57,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Educational Services",
    "industry": "ELEMENTARY AND SECONDARY SCHOOLS",
    "salary": 36139.1954,
    "count": 174,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Entertainment",
    "industry": "",
    "salary": 18968.4247,
    "count": 146,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Entertainment",
    "industry": "MUSEUMS, ART GALLERIES, HISTORICAL SITES, AND SIMILAR INSTITUTIONS",
    "salary": 23676.9231,
    "count": 13,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Entertainment",
    "industry": "TRAVELER ACCOMMODATION",
    "salary": 22988.4615,
    "count": 26,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Entertainment",
    "industry": "OTHER AMUSEMENT, GAMBLING, AND RECREATION INDUSTRIES",
    "salary": 20272,
    "count": 25,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Entertainment",
    "industry": "RESTAURANTS AND OTHER FOOD SERVICES",
    "salary": 15183.3333,
    "count": 66,
    "rank": 4
  },
  {
    "state": "Wyoming",
    "industry_type": "Finance",
    "industry": "",
    "salary": 43881.6667,
    "count": 60,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Finance",
    "industry": "BANKING AND RELATED ACTIVITIES",
    "salary": 53611.7647,
    "count": 17,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Finance",
    "industry": "REAL ESTATE",
    "salary": 43294.1176,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Finance",
    "industry": "INSURANCE CARRIERS AND RELATED ACTIVITIES",
    "salary": 27431.25,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Health Care",
    "industry": "",
    "salary": 43686.9595,
    "count": 148,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Health Care",
    "industry": "OFFICES OF PHYSICIANS",
    "salary": 60583.3333,
    "count": 12,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Health Care",
    "industry": "HOSPITALS",
    "salary": 46275,
    "count": 68,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Health Care",
    "industry": "OUTPATIENT CARE CENTERS",
    "salary": 38750,
    "count": 16,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Health Care",
    "industry": "NURSING CARE FACILITIES (SKILLED NURSING FACILITIES)",
    "salary": 31541.1765,
    "count": 17,
    "rank": 4
  },
  {
    "state": "Wyoming",
    "industry_type": "Information",
    "industry": "",
    "salary": 44356.5217,
    "count": 23,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Manufacturing",
    "industry": "",
    "salary": 63610.4478,
    "count": 67,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Manufacturing",
    "industry": "INDUSTRIAL AND MISCELLANEOUS CHEMICALS",
    "salary": 106909.0909,
    "count": 11,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Military",
    "industry": "",
    "salary": 52308.6957,
    "count": 23,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Military",
    "industry": "U.S. AIR FORCE",
    "salary": 54655,
    "count": 20,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Mining",
    "industry": "",
    "salary": 75041.5584,
    "count": 154,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Mining",
    "industry": "NONMETALLIC MINERAL MINING AND QUARRYING",
    "salary": 92333.3333,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Mining",
    "industry": "OIL AND GAS EXTRACTION",
    "salary": 88494.1176,
    "count": 17,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Mining",
    "industry": "COAL MINING",
    "salary": 70466.6667,
    "count": 48,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Mining",
    "industry": "SUPPORT ACTIVITIES FOR MINING",
    "salary": 69451.4286,
    "count": 70,
    "rank": 4
  },
  {
    "state": "Wyoming",
    "industry_type": "Professional Services",
    "industry": "",
    "salary": 40961.6129,
    "count": 93,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Professional Services",
    "industry": "LEGAL SERVICES",
    "salary": 48920,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Professional Services",
    "industry": "EMPLOYMENT SERVICES",
    "salary": 21254.5455,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "",
    "salary": 46429.8013,
    "count": 151,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ENVIRONMENTAL QUALITY AND HOUSING PROGRAMS",
    "salary": 52952.381,
    "count": 21,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "JUSTICE, PUBLIC ORDER, AND SAFETY ACTIVITIES",
    "salary": 52408,
    "count": 50,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "NATIONAL SECURITY AND INTERNATIONAL AFFAIRS",
    "salary": 52180,
    "count": 15,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF ECONOMIC PROGRAMS AND SPACE RESEARCH",
    "salary": 52106.25,
    "count": 16,
    "rank": 4
  },
  {
    "state": "Wyoming",
    "industry_type": "Public Administration",
    "industry": "ADMINISTRATION OF HUMAN RESOURCE PROGRAMS",
    "salary": 36220,
    "count": 20,
    "rank": 5
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "",
    "salary": 30059.3452,
    "count": 168,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "AUTOMOBILE DEALERS",
    "salary": 40240,
    "count": 15,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "BUILDING MATERIAL AND SUPPLIES DEALERS",
    "salary": 36278.8889,
    "count": 18,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "GASOLINE STATIONS",
    "salary": 26652.9412,
    "count": 17,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "DEPARTMENT AND DISCOUNT STORES",
    "salary": 21986.9565,
    "count": 23,
    "rank": 4
  },
  {
    "state": "Wyoming",
    "industry_type": "Retail Trade",
    "industry": "GROCERY STORES",
    "salary": 21494.4444,
    "count": 27,
    "rank": 5
  },
  {
    "state": "Wyoming",
    "industry_type": "Services",
    "industry": "",
    "salary": 34097.0149,
    "count": 67,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Services",
    "industry": "AUTOMOTIVE REPAIR AND MAINTENANCE",
    "salary": 38287.5,
    "count": 16,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Services",
    "industry": "CIVIC, SOCIAL, ADVOCACY ORGANIZATIONS, AND GRANTMAKING AND GIVING SERVICES",
    "salary": 35590.9091,
    "count": 11,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Services",
    "industry": "RELIGIOUS ORGANIZATIONS",
    "salary": 32054.5455,
    "count": 11,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Social Assistance",
    "industry": "",
    "salary": 18044.6341,
    "count": 41,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Social Assistance",
    "industry": "INDIVIDUAL AND FAMILY SERVICES",
    "salary": 18868.1818,
    "count": 22,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Social Assistance",
    "industry": "CHILD DAY CARE SERVICES",
    "salary": 18533.125,
    "count": 16,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Transportation",
    "industry": "",
    "salary": 50982.6667,
    "count": 75,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Transportation",
    "industry": "RAIL TRANSPORTATION",
    "salary": 71631.5789,
    "count": 19,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Transportation",
    "industry": "POSTAL SERVICE",
    "salary": 46853.8462,
    "count": 13,
    "rank": 2
  },
  {
    "state": "Wyoming",
    "industry_type": "Transportation",
    "industry": "TRUCK TRANSPORTATION",
    "salary": 42759.0909,
    "count": 22,
    "rank": 3
  },
  {
    "state": "Wyoming",
    "industry_type": "Utilities",
    "industry": "",
    "salary": 60485,
    "count": 40,
    "rank": 0
  },
  {
    "state": "Wyoming",
    "industry_type": "Utilities",
    "industry": "ELECTRIC POWER GENERATION, TRANSMISSION AND DISTRIBUTION",
    "salary": 59126.087,
    "count": 23,
    "rank": 1
  },
  {
    "state": "Wyoming",
    "industry_type": "Wholesale Trade",
    "industry": "",
    "salary": 51841.3793,
    "count": 29,
    "rank": 0
  }
];