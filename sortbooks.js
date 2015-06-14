
function removeArray(item) {
  // console.log(item);
  if (typeof item !== 'object') {
    return;
  }
  console.log('%%%%%%%%%%% ITEM:', item);
  for (var key in item) {
    console.log('key:::', key)
    if (item.hasOwnProperty(key)) {
      console.log('isArray:', Array.isArray(item[key]))
      if (Array.isArray(item[key])) {
        item[key] = item[key][0];
        removeArray(item[key]);
      }
      // console.log('item[key]: ', item[key])
    }
  }
  console.log('***** FINISH *****', item)
  return item;
}

var books = [
  {
    "ASIN": [
      "0062385658"
    ],
    "DetailPageURL": [
      "http://www.amazon.com/Harry-Potter-Magical-Places-Hogwarts/dp/0062385658%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0062385658"
    ],
    "ItemLinks": [
      {
        "ItemLink": [
          {
            "Description": [
              "Technical Details"
            ],
            "URL": [
              "http://www.amazon.com/Harry-Potter-Magical-Places-Hogwarts/dp/tech-data/0062385658%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "Add To Baby Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/baby/add-item.html%3Fasin.0%3D0062385658%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "Add To Wedding Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wedding/add-item.html%3Fasin.0%3D0062385658%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "Add To Wishlist"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wishlist/add-item.html%3Fasin.0%3D0062385658%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "Tell A Friend"
            ],
            "URL": [
              "http://www.amazon.com/gp/pdp/taf/0062385658%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "All Customer Reviews"
            ],
            "URL": [
              "http://www.amazon.com/review/product/0062385658%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          },
          {
            "Description": [
              "All Offers"
            ],
            "URL": [
              "http://www.amazon.com/gp/offer-listing/0062385658%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0062385658"
            ]
          }
        ]
      }
    ],
    "SmallImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL75_.jpg"
        ],
        "Height": [
          {
            "_": "75",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "63",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "MediumImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL160_.jpg"
        ],
        "Height": [
          {
            "_": "160",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "135",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "LargeImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51RtxMR55uL.jpg"
        ],
        "Height": [
          {
            "_": "500",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "422",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "ImageSets": [
      {
        "ImageSet": [
          {
            "$": {
              "Category": "primary"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "25",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "63",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "63",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "93",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "135",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51RtxMR55uL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "422",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "14",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "34",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "34",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "51",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "74",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516x7VNRU9L.jpg"
                ],
                "Height": [
                  {
                    "_": "230",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "77",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "112",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/510%2BJ8c6K3L.jpg"
                ],
                "Height": [
                  {
                    "_": "350",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "77",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "112",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51r8gafHL4L.jpg"
                ],
                "Height": [
                  {
                    "_": "350",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "77",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "112",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51E45ZgiBmL.jpg"
                ],
                "Height": [
                  {
                    "_": "350",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "77",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "112",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51OB6vh3nhL.jpg"
                ],
                "Height": [
                  {
                    "_": "350",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "ItemAttributes": [
      {
        "Author": [
          "Jody Revenson"
        ],
        "Binding": [
          "Hardcover"
        ],
        "EAN": [
          "9780062385659"
        ],
        "EANList": [
          {
            "EANListElement": [
              "9780062385659"
            ]
          }
        ],
        "ISBN": [
          "0062385658"
        ],
        "ItemDimensions": [
          {
            "Height": [
              {
                "_": "90",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "1110",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "0",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "900",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "Label": [
          "Harper Design"
        ],
        "Languages": [
          {
            "Language": [
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Published"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Original Language"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Unknown"
                ]
              }
            ]
          }
        ],
        "ListPrice": [
          {
            "Amount": [
              "4500"
            ],
            "CurrencyCode": [
              "USD"
            ],
            "FormattedPrice": [
              "$45.00"
            ]
          }
        ],
        "Manufacturer": [
          "Harper Design"
        ],
        "NumberOfItems": [
          "1"
        ],
        "NumberOfPages": [
          "208"
        ],
        "PackageDimensions": [
          {
            "Height": [
              {
                "_": "102",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "1102",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "295",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "921",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "ProductGroup": [
          "Book"
        ],
        "ProductTypeName": [
          "ABIS_BOOK"
        ],
        "PublicationDate": [
          "2015-05-12"
        ],
        "Publisher": [
          "Harper Design"
        ],
        "ReleaseDate": [
          "2015-05-12"
        ],
        "Studio": [
          "Harper Design"
        ],
        "Title": [
          "Harry Potter: Magical Places from the Films: Hogwarts, Diagon Alley, and Beyond"
        ]
      }
    ]
  },
  {
    "ASIN": [
      "0439785960"
    ],
    "DetailPageURL": [
      "http://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/0439785960%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0439785960"
    ],
    "ItemLinks": [
      {
        "ItemLink": [
          {
            "Description": [
              "Technical Details"
            ],
            "URL": [
              "http://www.amazon.com/Harry-Potter-Half-Blood-Prince-Book/dp/tech-data/0439785960%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "Add To Baby Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/baby/add-item.html%3Fasin.0%3D0439785960%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "Add To Wedding Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wedding/add-item.html%3Fasin.0%3D0439785960%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "Add To Wishlist"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wishlist/add-item.html%3Fasin.0%3D0439785960%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "Tell A Friend"
            ],
            "URL": [
              "http://www.amazon.com/gp/pdp/taf/0439785960%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "All Customer Reviews"
            ],
            "URL": [
              "http://www.amazon.com/review/product/0439785960%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          },
          {
            "Description": [
              "All Offers"
            ],
            "URL": [
              "http://www.amazon.com/gp/offer-listing/0439785960%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439785960"
            ]
          }
        ]
      }
    ],
    "SmallImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL75_.jpg"
        ],
        "Height": [
          {
            "_": "75",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "52",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "MediumImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL160_.jpg"
        ],
        "Height": [
          {
            "_": "160",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "111",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "LargeImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL.jpg"
        ],
        "Height": [
          {
            "_": "500",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "348",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "ImageSets": [
      {
        "ImageSet": [
          {
            "$": {
              "Category": "primary"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "52",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "77",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "111",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51NbOxBO%2BBL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "348",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "22",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "82",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "120",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/4150ZGTyN8L.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "375",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "ItemAttributes": [
      {
        "Author": [
          "J.K. Rowling"
        ],
        "Binding": [
          "Paperback"
        ],
        "Brand": [
          "Scholastic"
        ],
        "CatalogNumberList": [
          {
            "CatalogNumberListElement": [
              "HP06",
              "HP-1408"
            ]
          }
        ],
        "Creator": [
          {
            "_": "Mary GrandPré",
            "$": {
              "Role": "Illustrator"
            }
          }
        ],
        "EAN": [
          "9780439785969"
        ],
        "EANList": [
          {
            "EANListElement": [
              "8580001047003",
              "9780439785969"
            ]
          }
        ],
        "Edition": [
          "Reprint"
        ],
        "Feature": [
          "Harry",
          "Potter",
          "Is",
          "So",
          "Cool!"
        ],
        "ISBN": [
          "0439785960"
        ],
        "ItemDimensions": [
          {
            "Height": [
              {
                "_": "775",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "200",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "100",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "575",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "Label": [
          "Scholastic Paperbacks"
        ],
        "Languages": [
          {
            "Language": [
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Published"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Original Language"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Unknown"
                ]
              }
            ]
          }
        ],
        "ListPrice": [
          {
            "Amount": [
              "1299"
            ],
            "CurrencyCode": [
              "USD"
            ],
            "FormattedPrice": [
              "$12.99"
            ]
          }
        ],
        "Manufacturer": [
          "Scholastic Paperbacks"
        ],
        "MPN": [
          "9780439785969"
        ],
        "NumberOfItems": [
          "1"
        ],
        "NumberOfPages": [
          "652"
        ],
        "PackageDimensions": [
          {
            "Height": [
              {
                "_": "150",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "740",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "90",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "520",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "PackageQuantity": [
          "1"
        ],
        "PartNumber": [
          "9780439785969"
        ],
        "ProductGroup": [
          "Book"
        ],
        "ProductTypeName": [
          "ABIS_BOOK"
        ],
        "PublicationDate": [
          "2006-07-25"
        ],
        "Publisher": [
          "Scholastic Paperbacks"
        ],
        "ReleaseDate": [
          "2006-07-25"
        ],
        "Studio": [
          "Scholastic Paperbacks"
        ],
        "Title": [
          "Harry Potter and the Half-Blood Prince (Book 6)"
        ]
      }
    ]
  },
  {
    "ASIN": [
      "0439136369"
    ],
    "DetailPageURL": [
      "http://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/0439136369%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0439136369"
    ],
    "ItemLinks": [
      {
        "ItemLink": [
          {
            "Description": [
              "Technical Details"
            ],
            "URL": [
              "http://www.amazon.com/Harry-Potter-Prisoner-Azkaban-Rowling/dp/tech-data/0439136369%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "Add To Baby Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/baby/add-item.html%3Fasin.0%3D0439136369%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "Add To Wedding Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wedding/add-item.html%3Fasin.0%3D0439136369%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "Add To Wishlist"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wishlist/add-item.html%3Fasin.0%3D0439136369%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "Tell A Friend"
            ],
            "URL": [
              "http://www.amazon.com/gp/pdp/taf/0439136369%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "All Customer Reviews"
            ],
            "URL": [
              "http://www.amazon.com/review/product/0439136369%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          },
          {
            "Description": [
              "All Offers"
            ],
            "URL": [
              "http://www.amazon.com/gp/offer-listing/0439136369%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D0439136369"
            ]
          }
        ]
      }
    ],
    "SmallImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL75_.jpg"
        ],
        "Height": [
          {
            "_": "75",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "51",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "MediumImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL160_.jpg"
        ],
        "Height": [
          {
            "_": "160",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "109",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "LargeImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/51gY5jzz3NL.jpg"
        ],
        "Height": [
          {
            "_": "500",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "342",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "ImageSets": [
      {
        "ImageSet": [
          {
            "$": {
              "Category": "primary"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "21",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "51",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "51",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "109",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51gY5jzz3NL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "342",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "22",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "82",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "120",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/410N5l33zqL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "375",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "ItemAttributes": [
      {
        "Author": [
          "J.K. Rowling"
        ],
        "Binding": [
          "Paperback"
        ],
        "Brand": [
          "Scholastic"
        ],
        "CatalogNumberList": [
          {
            "CatalogNumberListElement": [
              "HP-1269",
              "0439136369"
            ]
          }
        ],
        "Creator": [
          {
            "_": "Mary GrandPré",
            "$": {
              "Role": "Illustrator"
            }
          }
        ],
        "EAN": [
          "9780439136365"
        ],
        "EANList": [
          {
            "EANListElement": [
              "9780439136365"
            ]
          }
        ],
        "Feature": [
          "Great product!"
        ],
        "ISBN": [
          "0439136369"
        ],
        "ItemDimensions": [
          {
            "Height": [
              {
                "_": "775",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "125",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "60",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "525",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "Label": [
          "Scholastic Paperbacks"
        ],
        "Languages": [
          {
            "Language": [
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Published"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Original Language"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Unknown"
                ]
              }
            ]
          }
        ],
        "ListPrice": [
          {
            "Amount": [
              "1099"
            ],
            "CurrencyCode": [
              "USD"
            ],
            "FormattedPrice": [
              "$10.99"
            ]
          }
        ],
        "Manufacturer": [
          "Scholastic Paperbacks"
        ],
        "MPN": [
          "9780439136365"
        ],
        "NumberOfItems": [
          "1"
        ],
        "NumberOfPages": [
          "448"
        ],
        "PackageDimensions": [
          {
            "Height": [
              {
                "_": "120",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "750",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "70",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "520",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "PackageQuantity": [
          "1"
        ],
        "PartNumber": [
          "9780439136365"
        ],
        "ProductGroup": [
          "Book"
        ],
        "ProductTypeName": [
          "ABIS_BOOK"
        ],
        "PublicationDate": [
          "2001-10-01"
        ],
        "Publisher": [
          "Scholastic Paperbacks"
        ],
        "ReleaseDate": [
          "2001-09-11"
        ],
        "Studio": [
          "Scholastic Paperbacks"
        ],
        "Title": [
          "Harry Potter and the Prisoner of Azkaban"
        ]
      }
    ]
  },
  {
    "ASIN": [
      "006443009X"
    ],
    "DetailPageURL": [
      "http://www.amazon.com/Harry-Dirty-Dog-Gene-Zion/dp/006443009X%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D006443009X"
    ],
    "ItemLinks": [
      {
        "ItemLink": [
          {
            "Description": [
              "Technical Details"
            ],
            "URL": [
              "http://www.amazon.com/Harry-Dirty-Dog-Gene-Zion/dp/tech-data/006443009X%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "Add To Baby Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/baby/add-item.html%3Fasin.0%3D006443009X%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "Add To Wedding Registry"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wedding/add-item.html%3Fasin.0%3D006443009X%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "Add To Wishlist"
            ],
            "URL": [
              "http://www.amazon.com/gp/registry/wishlist/add-item.html%3Fasin.0%3D006443009X%26SubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "Tell A Friend"
            ],
            "URL": [
              "http://www.amazon.com/gp/pdp/taf/006443009X%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "All Customer Reviews"
            ],
            "URL": [
              "http://www.amazon.com/review/product/006443009X%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          },
          {
            "Description": [
              "All Offers"
            ],
            "URL": [
              "http://www.amazon.com/gp/offer-listing/006443009X%3FSubscriptionId%3DAKIAJCSFFMTP4IA5L5IQ%26tag%3Dhundredbest-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D386001%26creativeASIN%3D006443009X"
            ]
          }
        ]
      }
    ],
    "SmallImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL75_.jpg"
        ],
        "Height": [
          {
            "_": "75",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "55",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "MediumImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL160_.jpg"
        ],
        "Height": [
          {
            "_": "160",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "117",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "LargeImage": [
      {
        "URL": [
          "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL.jpg"
        ],
        "Height": [
          {
            "_": "500",
            "$": {
              "Units": "pixels"
            }
          }
        ],
        "Width": [
          {
            "_": "367",
            "$": {
              "Units": "pixels"
            }
          }
        ]
      }
    ],
    "ImageSets": [
      {
        "ImageSet": [
          {
            "$": {
              "Category": "primary"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "22",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "55",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "55",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "81",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "117",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/516k3rPf6%2BL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "367",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "20",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "51",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "51",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "74",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "108",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/41S-TmyeRpL.jpg"
                ],
                "Height": [
                  {
                    "_": "500",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "337",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          },
          {
            "$": {
              "Category": "variant"
            },
            "SwatchImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL._SL30_.jpg"
                ],
                "Height": [
                  {
                    "_": "22",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "30",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "SmallImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "ThumbnailImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL._SL75_.jpg"
                ],
                "Height": [
                  {
                    "_": "56",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "75",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "TinyImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL._SL110_.jpg"
                ],
                "Height": [
                  {
                    "_": "82",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "110",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "MediumImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL._SL160_.jpg"
                ],
                "Height": [
                  {
                    "_": "120",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "160",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ],
            "LargeImage": [
              {
                "URL": [
                  "http://ecx.images-amazon.com/images/I/51Y1WMSHJDL.jpg"
                ],
                "Height": [
                  {
                    "_": "356",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ],
                "Width": [
                  {
                    "_": "475",
                    "$": {
                      "Units": "pixels"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "ItemAttributes": [
      {
        "Author": [
          "Gene Zion"
        ],
        "Binding": [
          "Paperback"
        ],
        "Brand": [
          "Harper Collins"
        ],
        "CatalogNumberList": [
          {
            "CatalogNumberListElement": [
              "HP-029",
              "HC-9780064430098",
              "ERI-HC-9780064430098"
            ]
          }
        ],
        "Creator": [
          {
            "_": "Margaret Bloy Graham",
            "$": {
              "Role": "Illustrator"
            }
          }
        ],
        "EAN": [
          "9780064430098"
        ],
        "EANList": [
          {
            "EANListElement": [
              "9780064430098"
            ]
          }
        ],
        "Edition": [
          "0"
        ],
        "Feature": [
          "Great product!"
        ],
        "ISBN": [
          "006443009X"
        ],
        "ItemDimensions": [
          {
            "Height": [
              {
                "_": "1100",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "25",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "100",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "775",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "Label": [
          "HarperCollins"
        ],
        "Languages": [
          {
            "Language": [
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Published"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Original Language"
                ]
              },
              {
                "Name": [
                  "English"
                ],
                "Type": [
                  "Unknown"
                ]
              }
            ]
          }
        ],
        "ListPrice": [
          {
            "Amount": [
              "699"
            ],
            "CurrencyCode": [
              "USD"
            ],
            "FormattedPrice": [
              "$6.99"
            ]
          }
        ],
        "Manufacturer": [
          "HarperCollins"
        ],
        "Model": [
          "HC-9780064430098"
        ],
        "MPN": [
          "006443009X"
        ],
        "NumberOfItems": [
          "1"
        ],
        "NumberOfPages": [
          "32"
        ],
        "PackageDimensions": [
          {
            "Height": [
              {
                "_": "2",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Length": [
              {
                "_": "1120",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ],
            "Weight": [
              {
                "_": "30",
                "$": {
                  "Units": "hundredths-pounds"
                }
              }
            ],
            "Width": [
              {
                "_": "820",
                "$": {
                  "Units": "hundredths-inches"
                }
              }
            ]
          }
        ],
        "PackageQuantity": [
          "1"
        ],
        "PartNumber": [
          "006443009X"
        ],
        "ProductGroup": [
          "Book"
        ],
        "ProductTypeName": [
          "ABIS_BOOK"
        ],
        "PublicationDate": [
          "2006-01-24"
        ],
        "Publisher": [
          "HarperCollins"
        ],
        "ReleaseDate": [
          "2006-01-24"
        ],
        "Studio": [
          "HarperCollins"
        ],
        "Title": [
          "Harry the Dirty Dog"
        ]
      }
    ]
  }
];


removeArray(books[0]);
