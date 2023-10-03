import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { setDeletedDataInLocal, setUpdatedQuantity, setWishListDataInLocal } from '../redux/localReducer/action'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import { Box, Button, Grid, GridItem, HStack, Heading, Image, Table, TableContainer, Tag, TagLabel, Tbody, Td, Text, Tfoot, Th, Thead, Tr, VStack } from '@chakra-ui/react'
import ban2 from "../images/banner/ban-2.jpg"
import { toggleAddToCart } from '../redux/Men/action'

export const Cart = () => {
  const localCartData = useSelector((store) => store.localReducer.addCartData);
  const dispatch = useDispatch();

  const onToken = (token) => {
    console.log(token);
  }
  const totalAmount = localCartData.reduce((total, curr) => total + (curr.price * curr.quantity), 0)

  const handleDeleteCartData = (product) => {
    dispatch(toggleAddToCart(product.id, !product.addToCart))
    let existingCartItems = localCartData.filter(data => data.id !== product.id);
    dispatch(setDeletedDataInLocal("cartData", existingCartItems))
  }

  const handleAddInWishList = (data) => {
    dispatch(setWishListDataInLocal("wishListData", data))
  }
  const handleIncrement = (id) => {
    const updatedData = localCartData.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    dispatch(setUpdatedQuantity("cartData", updatedData))
  }
  const handleDecrement = (id) =>{
    const updatedData = localCartData.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    dispatch(setUpdatedQuantity("cartData", updatedData))
  }
  return (
    <>
      <div className='h-[220px] overflow-hidden relative'>
        <img src={ban2} alt="Poster" />
        <div className="absolute text-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <h1 className=" text-white text-3xl font-bold ">YOU MAKE US SPECIAL</h1>
          <p className=" text-white text-sm font-normal">Clothly as unique as you are!</p>
        </div>
      </div>
      <Grid templateColumns={'repeat(5, 1fr)'} gap={2} mt={10}>
        <GridItem colSpan={4}>
          <TableContainer bg={"#fff"} borderRadius={2} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} w={"95%"} m={'auto'}>
            <Heading margin={5} color={'black'} borderBottom={"1px solid #3333"}>CART</Heading>
            {localCartData.length > 0 ? <Table size='lg'>
              <Thead bg={'gray.200'} >
                <Tr>
                  <Th></Th>
                  <Th>PRODUCT</Th>
                  <Th>PRICE</Th>
                  <Th>QUANTITY</Th>
                  <Th>SUBTOTAL</Th>
                  <Th>WishList</Th>
                </Tr>
              </Thead>
              <Tbody>
                {localCartData?.map((product) => (
                  <Tr key={product.id}>
                    <Td cursor={'pointer'} onClick={() => handleDeleteCartData(product)}>
                      <span className='text-lg hover:text-red-600 transition'>
                        <MdDeleteOutline />
                      </span>
                    </Td>
                    <Td width={500}>
                      <HStack spacing={10}>
                        <Image width={"70px"} borderRadius={3} src={product.image} />
                        <Text >{product.name}</Text>
                      </HStack>
                    </Td>
                    <Td>
                      &#8377;{product.price}
                    </Td>
                    <Td>
                      <Tag>
                        <Button
                          bg={'transparent'}
                          fontWeight={900}
                          _hover={{
                            background: 'transparent',
                            color: "HSL(143, 72%, 46%)"
                          }}
                          p={3}
                          onClick={() => handleIncrement(product.id)}
                          fontSize={18}
                        >+</Button>

                        <TagLabel
                          p={3}
                          fontSize={18}
                          borderLeft={'1px solid #333'}
                          borderRight={'1px solid #333'}
                        >{product.quantity}</TagLabel>

                        <Button
                          bg={'transparent'}
                          fontWeight={900}
                          _hover={{
                            background: 'transparent',
                            color: "HSL(353, 72%, 46%)"
                          }}
                          isDisabled={product.quantity <= 1}
                          p={3}
                          onClick={() => handleDecrement(product.id)}
                          fontSize={18}
                        >-</Button>
                      </Tag>
                    </Td>
                    <Td>
                      &#8377;{product.price * product.quantity}
                    </Td>
                    <Td className='cursor-pointer' onClick={() => handleAddInWishList(product)}>Add</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table> :
              <Heading textAlign={'center'} color={"gray.400"} marginBlock={5} >No Data Available</Heading>
            }
          </TableContainer>
        </GridItem>
        <GridItem colSpan={1}>
          <Box>
            <Box borderRadius={2} h={"300px"} bg={"#fff"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"} width="250px">
              <VStack>
                <Box bg={"green.500"} width={"100%"} color={"#fff"} fontWeight={500} fontSize={20} p={"20px 10px"}>
                  <Text>CART TOTALS</Text>
                </Box>
                <HStack borderBottom={"1px solid #3333"} fontWeight={500} color={"gray.600"} paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                  <Text fontSize={"17px"}>Total Product</Text>
                  <Text fontSize={"20px"}>{localCartData.length}</Text>
                </HStack>
                <HStack fontWeight={500} color={"gray.600"} paddingBlock={5} w={"90%"} justifyContent={'space-between'}>
                  <Text fontSize={"17px"}>Total Amount</Text>
                  <Text fontSize={"20px"}>&#8377;{totalAmount}</Text>
                </HStack>
                <Box>
                  <StripeCheckout
                    token={onToken}
                    name="Printed T-Shirt"
                    description='US Polo - Medium'
                    image="https://placehold.jp/150x150.png"
                    currency="INR"
                    amount="120000"
                    panelLabel='Make Payment'
                    stripeKey="pk_test_51NwN46SGSe6lG6bP83Rmf9aDMMwLbBRj4acZBi8TEAmneEox9pW5vKXTUMMY8y6X9uo6DKasYylIv4v6s9QD2K8l00kalH5AX2"
                  >
                    <button disabled={localCartData.length <= 0} className={`bg-black cursor-no-drop hover:bg-yellow-600 text-white w-[200px] transition duration-500 py-2 rounded-sm`}>PLACE ORDER</button>
                  </StripeCheckout>
                </Box>
              </VStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </>
  )
}
